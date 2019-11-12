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

// Utilities
import { withIsBandit } from '../../utilities';

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
export const getOpponentOptions = createSelector(
    [getIds, getUserId, getPlayerEntities, getUserEntities],
    (ids, userId, players, users) => {
        const denormalizedPlayers = denormalize(ids, [playerSchema], {players, users});
        const opponentOptions = [];

        for (let i = 0; i < denormalizedPlayers.length; i++) {
            const player = denormalizedPlayers[i];

            if (player.user_id === userId) {
                continue;
            }

            opponentOptions.push({
                value: player.id,
                text: `${player.user.first_name} ${player.user.last_name}`
            });
        }

        return opponentOptions;
    }
);


const sortPlayers = {
    'a-z': (a, b) => {
        const lowerCaseA = a.user.display_name.toLowerCase();
        const lowerCaseB = b.user.display_name.toLowerCase();

        if (lowerCaseA < lowerCaseB) {
            return -1;
        }

        return lowerCaseA > lowerCaseB ? 1 : 0;
    },
    games: (a, b) => b.games - a.games,
    rating: (a, b) => {
        if (a.games === 0) {
            return 1;
        }

        if (b.games === 0) {
            return -1;
        }

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
            ...withIsBandit(player, banditId)
        }));
        
        return denormalizedPlayers.sort(sortPlayers[orderBy]);
    }
);

export const makeGetPlayer = () => createSelector(
    [getBanditId, getPlayerEntity, getUserEntities],
    (banditId, player, users) =>
        player
            ? {
                ...withIsBandit(
                    denormalize(player.id, playerSchema, {players: {[player.id]: player}, users}),
                    banditId
                ),
                winRatio: player.losses === 0
                    ? player.wins.toFixed(2)
                    : (player.wins / player.losses).toFixed(2)
            }
            : undefined
);
