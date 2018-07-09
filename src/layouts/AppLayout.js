import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import ClubMenu from '../components/menus/ClubMenu';
import UserMenu from '../components/menus/UserMenu';

// Containers
import HeaderContainer from '../containers/shared/HeaderContainer';

// Routes
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute';

// Screens
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import AddMatchScreen from '../screens/AddMatchScreen';
import ClubSettingsScreen from '../screens/ClubSettingsScreen';
import ClubsScreen from '../screens/ClubsScreen';
import CreateClubScreen from '../screens/CreateClubScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DisputeScreen from '../screens/DisputeScreen';
import DisputesScreen from '../screens/DisputesScreen';
import InvitePlayerScreen from '../screens/InvitePlayerScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlayersScreen from '../screens/PlayersScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import MatchScreen from '../screens/MatchScreen';
import MatchesScreen from '../screens/MatchesScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
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
                        <Route component={ClubMenu} />
                    </Switch>
                </HeaderContainer>
            }

            <main className="o-main">
                <Switch>
                    {/* Authenticated */}
                    <AuthenticatedRoute exact path="/clubs" component={ClubsScreen} />
                    <AuthenticatedRoute exact path="/clubs/create" component={CreateClubScreen} />
                    <AuthenticatedRoute exact path="/settings" component={UpdateSettingsScreen} />

                    <AuthenticatedRoute exact path="/" component={DashboardScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/club-settings" component={ClubSettingsScreen} isClubRoute={true} />

                    <AuthenticatedRoute exact path="/disputes" component={DisputesScreen} isClubRoute={true} />
                    <AuthenticatedRoute exact path="/disputes/:disputeId" component={DisputeScreen} isClubRoute={true} />

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
