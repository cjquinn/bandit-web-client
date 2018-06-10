import moment from 'moment';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { getPlayerEntities, getUserEntities } from '../../entities/selectors';
import { getPlayerId } from '../../props/selectors';
import { getBanditId, getUserId, makeIsFetchingSelector } from '../../shared/selectors';

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

export const getOrderBy = (state, props) => props && props.orderBy ? props.orderBy : getPlayerState(state).orderBy;

// Memoized
export const makeGetPlayer = () => createSelector(
    [getBanditId, getPlayerEntity, getUserEntities],
    (banditId, player, users) =>
        player
            ? {
                ...denormalize(player.id, playerSchema, {
                    players: {[player.id]: player},
                    users
                }),
                isBandit: (player.wins > 0 || player.losses > 0) && player.id === banditId
            }
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

        return bGames - aGames;
    },
    rating: (a, b) => {
        if (a.rating !== b.rating) {
            return b.rating - a.rating;
        }

        if (a.wins !== b.wins) {
            return b.wins - a.wins;
        }

        if (!a.losses !== b.losses) {
            return a.losses - b.losses;
        }

        return moment(a.modified).isAfter(b.modified) ? 1 : -1;
    }
};

export const getPlayers = createSelector(
    [getIds, getOrderBy, getBanditId, getPlayerEntities, getUserEntities],
    (ids, orderBy, banditId, players, users) => {
        const denormalizedPlayers = denormalize(ids, [playerSchema], {players, users}).map(player => ({
            ...player,
            games: player.wins + player.losses,
            isBandit: (player.wins > 0 || player.losses > 0) && player.id === banditId
        }));
        
        return denormalizedPlayers.sort(sortPlayers[orderBy]);
    }
);

export const getOpponents = createSelector(
    [getUserId, getPlayers],
    (userId, players) => players.filter(player => player.user_id !== userId)
);
