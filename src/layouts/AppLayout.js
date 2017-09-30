import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import AddResultScreen from '../screens/AddResultScreen';
import ClubScreen from '../screens/ClubScreen';
import ClubSettingsScreen from '../screens/ClubSettingsScreen';
import ClubsScreen from '../screens/ClubsScreen';
import CreateClubScreen from '../screens/CreateClubScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DisputeScreen from '../screens/DisputeScreen';
import DisputesScreen from '../screens/DisputesScreen';
import InvitePlayerScreen from '../screens/InvitePlayerScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import LoginScreen from '../screens/LoginScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlayersScreen from '../screens/PlayersScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ResultScreen from '../screens/ResultScreen';
import ResultsScreen from '../screens/ResultsScreen';
import UserSettingsScreen from '../screens/UserSettingsScreen';

const AppLayout = () => (
    <Switch>
        {/* Club */}
        <Route exact path="/create-club" component={CreateClubScreen} />
        <Route exact path="/clubs" component={ClubsScreen} />
        <Route exact path="/club" component={ClubScreen} />
        <Route exact path="/club-settings" component={ClubSettingsScreen} />

        {/* Dashboard */}
        <Route exact path="/" component={DashboardScreen} />

        {/* Dispute */}
        <Route exact path="/disputes" component={DisputesScreen} />
        <Route exact path="/dispute" component={DisputeScreen} />

        {/* Leaderboard */}
        <Route exact path="/leaderboard" component={LeaderboardScreen} />

        {/* Player */}
        <Route exact path="/invite-player" component={InvitePlayerScreen} />
        <Route exact path="/players" component={PlayersScreen} />
        <Route exact path="/player" component={PlayerScreen} />

        {/* Result */}
        <Route exact path="/add-result" component={AddResultScreen} />
        <Route exact path="/results" component={ResultsScreen} />
        <Route exact path="/result" component={ResultScreen} />

        {/* User */}
        <Route exact path="/activate-account" component={ActivateAccountScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/request-password-reset" component={RequestPasswordResetScreen} />
        <Route exact path="/reset-password" component={ResetPasswordScreen} />
        <Route exact path="/user-settings" component={UserSettingsScreen} />
    </Switch>
);

export default AppLayout;
