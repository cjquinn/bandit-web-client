import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getPlayerByClubId } from '../selectors';
import { makeFetchSelectors } from '../../shared/selectors';
import { getUserEntities } from '../../user/selectors';

export const { getDidError, getIds, getIsFetching } = makeFetchSelectors(getPlayerByClubId);

export const getOrderBy = (state, props) => getPlayerByClubId(state, props).orderBy;

export const getPlayerEntity = (state, props) => state.entities.players[props.match.params.playerId];

export const getPlayerEntities = state => state.entities.players;

export const makeGetPlayer = () => createSelector(
    [getPlayerEntity, getUserEntities],
    (player, users) => denormalize(player.id, playerSchema, {
        players: {[player.id]: player},
        users
    })
);

const sortPlayers = {
    'a-z': (a, b) => {
        if (a.user.name < b.user.name) {
            return -1;
        }

        return a.user.name > b.user.name ? 1 : 0;
    },
    games: (a, b) => {
        const aGames = a.wins + a.losses;
        const bGames = b.wins + b.losses;

        if (aGames > bGames) {
            return -1;
        }

        return aGames < bGames ? 1 : 0;
    },
    rating: (a, b) => {
        if (a.rating < b.rating) {
            return -1;
        }

        return a.rating > b.rating ? 1 : 0;
    }
};

export const makeGetPlayers = () => createSelector(
    [getIds, getOrderBy, getPlayerEntities, getUserEntities],
    (ids, orderBy, players, users) =>
        denormalize(ids, [playerSchema], {players, users})
            .sort(sortPlayers[orderBy])
);
