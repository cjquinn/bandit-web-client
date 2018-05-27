import { createSelector } from 'reselect';

// Selectors
import { getClubEntities, getPlayerEntities, getUserEntities } from '../entities/selectors';

export const getClubId = state => state.user.clubId;

export const getId = state => state.user.id;

export const getIsLoading = state => state.user.isLoading;

export const getUserEntity = state => getUserEntities(state)[getId(state)];

export const getUser = createSelector(
    [getClubId, getClubEntities, getPlayerEntities, getUserEntity],
    (clubId, clubs, players, user) => {
        const playerId = user.players.find(playerId => players[playerId].club_id === clubId);

        return {
            ...user,
            isBandit: clubs && clubs[clubId] && +clubs[clubId].bandit_id === playerId,
            level: playerId ? players[playerId].level : {name: 'Unknown', slug: 'unknown'}
        };
    }
);

export const getIsAuthenticated = createSelector(
    [getId],
    id => id !== null
);
