import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getPlayerByClubId } from '../selectors';
import { getUserEntities } from '../../user/selectors';

export const getDidError = playerState => playerState.didError;

export const getIds = playerState => playerState.ids;

export const getIsFetching = playerState => playerState.isFetching;

export const getOrderBy = playerState => playerState.orderBy;

export const getPlayerEntity = (state, props) => state.entities.players[props.match.params.playerId];

export const getPlayerEntities = state => state.entities.players;

export const makeGetIsFetching = () => createSelector(
    getPlayerByClubId,
    playerState => getIsFetching(playerState)
);

export const makeGetOrderBy = () => createSelector(
    getPlayerByClubId,
    playerState => getOrderBy(playerState)
);

export const makeGetPlayers = () => createSelector(
    [getPlayerByClubId, getPlayerEntities, getUserEntities],
    (playerState, players, users) =>
        denormalize(getIds(playerState), [playerSchema], {players, users})
);

export const makeGetPlayersByName = () => createSelector(
    makeGetPlayers(),
    players => players.sort((a, b) => {
        if (a.user.name < b.user.name) {
            return -1;
        }

        return a.user.name > b.user.name ? 1 : 0;
    })
);

export const makeGetPlayersByGames = () => createSelector(
    makeGetPlayers(),
    players => players.sort((a, b) => {
        const aGames = a.wins + a.losses;
        const bGames = b.wins + b.losses;

        if (aGames > bGames) {
            return -1;
        }

        return aGames < bGames ? 1 : 0;
    })
);

export const makeGetPlayersByRating = () => createSelector(
    makeGetPlayers(),
    players => players.sort((a, b) => {
        if (a.rating < b.rating) {
            return -1;
        }

        return a.rating > b.rating ? 1 : 0;
    })
);

export const makeGetPlayersOrdered = () => createSelector(
    makeGetOrderBy(),
    makeGetPlayersByName(),
    makeGetPlayersByGames(),
    makeGetPlayersByRating(),
    (orderBy, playersByName, playersByGames, playersByRating) => {
        switch (orderBy) {
            case 'a-z':
                return playersByName;

            case 'games':
                return playersByGames;

            case 'rating':
                return playersByRating;
        }
    }
);
