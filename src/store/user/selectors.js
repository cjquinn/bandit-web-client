import { createSelector } from 'reselect';

// Selectors
import { getPlayerEntities, getUserEntities } from '../entities/selectors';
import { getBanditId, getClubId } from '../shared/selectors';

export const getId = state => state.user.id;

export const getIsLoading = state => state.user.isLoading;

export const getUserEntity = state => getUserEntities(state)[getId(state)];

export const getUser = createSelector(
    [getBanditId, getClubId, getPlayerEntities, getUserEntity],
    (banditId, clubId, players, user) => {
        const playerId = user.players.find(playerId => players[playerId].club_id === clubId);
        const player = playerId && players[playerId] ? players[playerId] : {};

        return {
            ...user,
            player: {
                ...player,
                isBandit: (player.wins > 0 || player.losses > 0) && player.id === banditId
            }
        };
    }
);

export const getIsAuthenticated = createSelector(
    [getId],
    id => id !== null
);
