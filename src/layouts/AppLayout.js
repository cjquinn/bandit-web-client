import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import UserMenu from '../components/menus/UserMenu';

// Containers
import ClubMenuContainer from '../containers/menus/ClubMenuContainer';
import FlashContainer from '../containers/shared/FlashContainer';
import HeaderContainer from '../containers/shared/HeaderContainer';

// Routes
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute';

// Screens
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import AddMatchScreen from '../screens/AddMatchScreen';
import ClubsScreen from '../screens/ClubsScreen';
import CreateClubScreen from '../screens/CreateClubScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ErrorScreen from '../screens/ErrorScreen';
import InvitePlayerScreen from '../screens/InvitePlayerScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlayersScreen from '../screens/PlayersScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import MatchScreen from '../screens/MatchScreen';
import MatchesScreen from '../screens/MatchesScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UpdateClubScreen from '../screens/UpdateClubScreen';
import UpdateSettingsScreen from '../screens/UpdateSettingsScreen';

const AppLayout = ({ isAuthenticated, isLoading }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="o-window">
            {isAuthenticated &&
                <HeaderContainer>
                    <Switch>
                        <Route path="/(clubs|settings|profile)" component={UserMenu} />
                        <Route component={ClubMenuContainer} isClubOwner={false} />
                    </Switch>
                </HeaderContainer>
            }

            <main className="o-main">
                <FlashContainer />

                <Switch>
                    {/* Authenticated */}
                    <AuthenticatedRoute exact path="/clubs" component={ClubsScreen} />
                    <AuthenticatedRoute exact path="/clubs/create" component={CreateClubScreen} />
                    <AuthenticatedRoute exact path="/settings" component={UpdateSettingsScreen} />

                    <AuthenticatedRoute exact path="/" component={DashboardScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/club" component={UpdateClubScreen} isClubRoute={true} />

                    <Redirect exact path="/leaderboard" to="/leaderboard/weekly" />
                    <AuthenticatedRoute path="/leaderboard" component={LeaderboardScreen} isClubRoute={true} />
                    
                    <AuthenticatedRoute exact path="/players" component={PlayersScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/players/invite" component={InvitePlayerScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/players/:playerId" component={PlayerScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/profile" component={PlayerScreen} isClubRoute={true} />

                    <AuthenticatedRoute exact path="/matches" component={MatchesScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/matches/add" component={AddMatchScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/matches/:matchId" component={MatchScreen} isClubRoute={true} />

                    {/* Unauthenticated */}
                    <UnauthenticatedRoute exact path="/activate-account" component={ActivateAccountScreen} />
                    <UnauthenticatedRoute exact path="/request-password-reset" component={RequestPasswordResetScreen} />
                    <UnauthenticatedRoute exact path="/reset-password" component={ResetPasswordScreen} />
                    <UnauthenticatedRoute exact path="/sign-in" component={SignInScreen} />
                    <UnauthenticatedRoute exact path="/sign-up" component={SignUpScreen} />

                    <Route exact path="/error" component={ErrorScreen} />

                    <Route exact path="/not-found" component={NotFoundScreen} />
                    <Redirect to="/not-found" />
                </Switch>
            </main>
        </div>
    );
};

AppLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default AppLayout;
