import PropTypes from 'prop-types';
import React from 'react';
import { Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Routes
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute';

// Screens
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import AddResultScreen from '../screens/AddResultScreen';
import ClubScreen from '../screens/ClubScreen';
import ClubSettingsScreen from '../screens/ClubSettingsScreen';
import ClubsScreen from '../screens/ClubsScreen';
import CreateClubAuthenticatedScreen from '../screens/CreateClubAuthenticatedScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DisputeScreen from '../screens/DisputeScreen';
import DisputesScreen from '../screens/DisputesScreen';
import InvitePlayerScreen from '../screens/InvitePlayerScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlayersScreen from '../screens/PlayersScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ResultScreen from '../screens/ResultScreen';
import ResultsScreen from '../screens/ResultsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserSettingsScreen from '../screens/UserSettingsScreen';

const AppLayout = ({ isAuthenticated, isLoading }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="o-window">
            {isAuthenticated && <Header />}

            <main className="o-main">
                <Switch>
                    {/* Authenticated */}
                    <AuthenticatedRoute exact path="/create-club-authenticated" component={CreateClubAuthenticatedScreen} />
                    <AuthenticatedRoute exact path="/clubs" component={ClubsScreen} />
                    <AuthenticatedRoute exact path="/club" component={ClubScreen} />
                    <AuthenticatedRoute exact path="/club-settings" component={ClubSettingsScreen} />
                    <AuthenticatedRoute exact path="/" component={DashboardScreen} />
                    <AuthenticatedRoute exact path="/disputes" component={DisputesScreen} />
                    <AuthenticatedRoute exact path="/dispute" component={DisputeScreen} />
                    <AuthenticatedRoute exact path="/leaderboard" component={LeaderboardScreen} />
                    <AuthenticatedRoute exact path="/invite-player" component={InvitePlayerScreen} />
                    <AuthenticatedRoute exact path="/players" component={PlayersScreen} />
                    <AuthenticatedRoute exact path="/player" component={PlayerScreen} />
                    <AuthenticatedRoute exact path="/add-result" component={AddResultScreen} />
                    <AuthenticatedRoute exact path="/results" component={ResultsScreen} />
                    <AuthenticatedRoute exact path="/result" component={ResultScreen} />
                    <AuthenticatedRoute exact path="/user-settings" component={UserSettingsScreen} />

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
