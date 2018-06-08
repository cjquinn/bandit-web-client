import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { getPlayerEntities, getUserEntities } from '../../entities/selectors';
import { getPlayerId } from '../../props/selectors';
import { makeIsFetchingSelector } from '../../shared/selectors';

export const initialState = {
    ids: [],
    isFetching: false,
    orderBy: 'a-z'
};

// Normalized
export const getPlayerEntity = (state, props) => getPlayerEntities(state)[getPlayerId(null, props)];

// State
const getPlayerState = state =>
    getByClubIdState(state)
        ? getByClubIdState(state).player
        : initialState;

export const getIds = state => getPlayerState(state).ids;

export const getIsFetching = makeIsFetchingSelector(getPlayerState);

export const getOrderBy = state => getPlayerState(state).orderBy;

// Memoized
export const makeGetPlayer = () => createSelector(
    [getPlayerEntity, getUserEntities],
    (player, users) =>
        player
            ? denormalize(player.id, playerSchema, {
                players: {[player.id]: player},
                users
            })
            : undefined
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
            .map(player => ({
                ...player,
                games: player.wins + player.losses
                // TODO ADD IN BANDIT - problably should be a selector
            }))
            .sort(sortPlayers[orderBy])
);
