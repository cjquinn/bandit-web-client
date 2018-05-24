import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import ClubScreen from '../screens/ClubScreen';
import ClubSettingsScreen from '../screens/ClubSettingsScreen';
import ClubsScreen from '../screens/ClubsScreen';
import CreateClubAuthenticatedScreen from '../screens/CreateClubAuthenticatedScreen';
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
import UserSettingsScreen from '../screens/UserSettingsScreen';

const AppLayout = ({ isLoading }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="o-window">
            <HeaderContainer>
                <Switch>
                    <Route path="/clubs/:clubId" component={ClubMenu} />
                    <Route component={UserMenu} />
                </Switch>
            </HeaderContainer>

            <main className="o-main">
                <Switch>
                    {/* Authenticated */}
                    <AuthenticatedRoute exact path="/" component={ClubsScreen} />
                    <AuthenticatedRoute exact path="/clubs" component={ClubsScreen} />
                    <AuthenticatedRoute exact path="/create-club" component={CreateClubAuthenticatedScreen} />
                    <AuthenticatedRoute exact path="/settings" component={UserSettingsScreen} />

                    <AuthenticatedRoute exact path="/clubs/:clubId" component={ClubScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/settings" component={ClubSettingsScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/invite-player" component={InvitePlayerScreen} />

                    <AuthenticatedRoute exact path="/clubs/:clubId/disputes" component={DisputesScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/disputes/:disputeId" component={DisputeScreen} />

                    <AuthenticatedRoute exact path="/clubs/:clubId/leaderboard" component={LeaderboardScreen} />
                    
                    <AuthenticatedRoute exact path="/clubs/:clubId/players" component={PlayersScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/players/:playerId" component={PlayerScreen} />

                    <AuthenticatedRoute exact path="/clubs/:clubId/add-match" component={AddMatchScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/matches" component={MatchesScreen} />
                    <AuthenticatedRoute exact path="/clubs/:clubId/matches/:matchId" component={MatchScreen} />

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
    isLoading: PropTypes.bool.isRequired
};

export default AppLayout;
