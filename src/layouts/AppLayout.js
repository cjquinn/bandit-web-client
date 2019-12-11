import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

// Components
import Loading from '../components/shared/Loading';
import UserMenu from '../components/menus/UserMenu';

// Containers
import ClubMenuContainer from '../containers/menus/ClubMenuContainer';
import ClubDeepLinkContainer from '../containers/ClubDeepLinkContainer';
import ErrorBoundary from '../containers/ErrorBoundary';
import FlashContainer from '../containers/shared/FlashContainer';
import HeaderContainer from '../containers/shared/HeaderContainer';

// Routes
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute';

// Screens
const AddMatchScreen = lazy(() => import('../screens/AddMatchScreen'));
const ChallengeScreen = lazy(() => import('../screens/ChallengeScreen'));
const ChallengesScreen = lazy(() => import('../screens/ChallengesScreen'));
const ClubsScreen = lazy(() => import('../screens/ClubsScreen'));
const CreateChallengeScreen = lazy(() => import('../screens/CreateChallengeScreen'));
const CreateClubAuthenticatedScreen = lazy(() => import('../screens/CreateClubAuthenticatedScreen'));
const CreateClubUnauthenticatedScreen = lazy(() => import('../screens/CreateClubUnauthenticatedScreen'));
const DashboardScreen = lazy(() => import('../screens/DashboardScreen'));
const ErrorScreen = lazy(() => import('../screens/ErrorScreen'));
const InvitePlayerScreen = lazy(() => import('../screens/InvitePlayerScreen'));
const LeaderboardScreen = lazy(() => import('../screens/LeaderboardScreen'));
const PlayerScreen = lazy(() => import('../screens/PlayerScreen'));
const PlayersScreen = lazy(() => import('../screens/PlayersScreen'));
const RequestPasswordResetScreen = lazy(() => import('../screens/RequestPasswordResetScreen'));
const ResetPasswordScreen = lazy(() => import('../screens/ResetPasswordScreen'));
const MatchScreen = lazy(() => import('../screens/MatchScreen'));
const MatchesScreen = lazy(() => import('../screens/MatchesScreen'));
const NotFoundScreen = lazy(() => import('../screens/NotFoundScreen'));
const SignInScreen = lazy(() => import('../screens/SignInScreen'));
const SignUpScreen = lazy(() => import('../screens/SignUpScreen'));
const TermsOfServiceScreen = lazy(() => import('../screens/TermsOfServiceScreen'));
const UpdateClubScreen = lazy(() => import('../screens/UpdateClubScreen'));
const UpdateSettingsScreen = lazy(() => import('../screens/UpdateSettingsScreen'));

const AppLayout = ({ isAuthenticated, isLoading }) => {
    if (isLoading) {
        return (
            <div className="o-window u-flex u-jc-center">
                <Loading />
            </div>
        );
    }

    return (
        <Switch>
            <AuthenticatedRoute
                exact
                path="/clubs/:clubId/:path?"
                component={ClubDeepLinkContainer}
            />

            <Route render={() => (
                <>
                    <div className="o-window">
                        {isAuthenticated &&
                            <HeaderContainer>
                                <Switch>
                                    <Route path="/(clubs|settings|profile)" component={UserMenu} />
                                    <Route component={ClubMenuContainer} />
                                </Switch>
                            </HeaderContainer>
                        }

                        <main className="o-main">
                            <FlashContainer />

                            <ErrorBoundary>
                                <Suspense fallback={<Loading />}>
                                    <Switch>
                                        {/* Authenticated */}
                                        <AuthenticatedRoute exact path="/clubs" component={ClubsScreen} />
                                        <AuthenticatedRoute exact path="/clubs/create" component={CreateClubAuthenticatedScreen} />
                                        <AuthenticatedRoute exact path="/settings" component={UpdateSettingsScreen} />

                                        <AuthenticatedRoute exact path="/" component={DashboardScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/club" component={UpdateClubScreen} isClubRoute={true} />

                                        <AuthenticatedRoute exact path="/challenges/create" component={CreateChallengeScreen} isClubRoute={true} />
                                        <Redirect exact path="/challenges" to="/challenges/open" />
                                        <AuthenticatedRoute exact path="/challenges/open" component={ChallengesScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/challenges/accepted" component={ChallengesScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/challenges/:challengeId" component={ChallengeScreen} isClubRoute={true} />

                                        <Redirect exact path="/leaderboard" to="/leaderboard/all-time" />
                                        <AuthenticatedRoute path="/leaderboard" component={LeaderboardScreen} isClubRoute={true} />
                                        
                                        <AuthenticatedRoute exact path="/players" component={PlayersScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/players/invite" component={InvitePlayerScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/players/:playerId" component={PlayerScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/profile" component={PlayerScreen} isClubRoute={true} />

                                        <AuthenticatedRoute exact path="/matches" component={MatchesScreen} isClubRoute={true} />
                                        <AuthenticatedRoute path="/matches/add" component={AddMatchScreen} isClubRoute={true} />
                                        <AuthenticatedRoute exact path="/matches/:matchId" component={MatchScreen} isClubRoute={true} />

                                        {/* Unauthenticated */}
                                        <UnauthenticatedRoute exact path="/create-club" component={CreateClubUnauthenticatedScreen} />
                                        <UnauthenticatedRoute exact path="/request-password-reset" component={RequestPasswordResetScreen} />
                                        <UnauthenticatedRoute exact path="/reset-password" component={ResetPasswordScreen} />
                                        <UnauthenticatedRoute exact path="/sign-in" component={SignInScreen} />
                                        <UnauthenticatedRoute exact path="/sign-up" component={SignUpScreen} />

                                        <Route exact path="/error" component={ErrorScreen} />
                                        <Route exact path="/not-found" component={NotFoundScreen} />
                                        <Route exact path="/terms-of-service" component={TermsOfServiceScreen} />
                                        <Redirect to="/not-found" />
                                    </Switch>
                                </Suspense>
                            </ErrorBoundary>
                        </main>
                    </div>

                    <footer className="o-container u-ph-1bl u-mt-1bl u-pv-2bl">
                        <Link to="/terms-of-service">
                            Terms of Service
                        </Link>
                    </footer>
                </>
            )} />
        </Switch>
    );
};

AppLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default AppLayout;
