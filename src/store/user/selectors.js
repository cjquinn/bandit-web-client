import { createSelector } from 'reselect';

// Selectors
import { getClub } from '../club/selectors';
import { getPlayerEntities, getUserEntities } from '../entities/selectors';
import { getBanditId, getClubId, getUserId } from '../shared/selectors';

// Utilities
import { withIsBandit } from '../utilities';

export const getIsLoading = state => state.user.isLoading;

export const getUserEntity = state => getUserEntities(state)[getUserId(state)];

export const getUser = createSelector(
    [getBanditId, getClubId, getPlayerEntities, getUserEntity],
    (banditId, clubId, players, user) => {
        if (!user) {
            return undefined;
        }

        const playerId = user.players.find(playerId => players[playerId].club_id === clubId);
        const player = playerId && players[playerId] ? players[playerId] : {};

        return {
            ...user,
            player: withIsBandit(player, banditId)
        };
    }
);

export const getIsAuthenticated = createSelector(
    [getUserId],
    id => id !== null
);

export const getIsClubOwner = createSelector(
    [getUserId, getClub],
    (userId, club) => club !== undefined && club.founder_id === userId
);

export const getCurrentPlayerId = createSelector(
    [getClubId, getPlayerEntities, getUserEntity],
    (clubId, players, user) => user.players.find(playerId => players[playerId].club_id === clubId)
);
