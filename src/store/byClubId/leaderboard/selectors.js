import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { getPlayerEntities, getUserEntities } from '../../entities/selectors';
import { getLimit, getPlayerId } from '../../props/selectors';
import { getBanditId, makeIsFetchingSelector } from '../../shared/selectors';

// Utilities
import { withIsBandit } from '../../utilities';

export const initialState = {
    ids: [],
    isFetching: false
};

// State
const getLeaderboardState = (state, props) =>
    getByClubIdState(state)
        ? getByClubIdState(state).leaderboard[props.period]
        : initialState;

export const getIds = (state, props) => getLeaderboardState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getLeaderboardState);

// Memoized
export const makeGetLeaderboard = () => createSelector(
    [getIds, getLimit, getPlayerId, getBanditId, getPlayerEntities, getUserEntities],
    (ids, limit, playerId, banditId, players, users) => {
        let idsToUse = ids;
        let startIndex = 0;

        if (limit) {        
            if (playerId) {
                let playerIdIndex = ids.indexOf(playerId);

                if (playerIdIndex === -1) {
                    return [];
                }

                startIndex = playerIdIndex === 0
                    ? playerIdIndex
                    : playerIdIndex === ids.length - 1
                        ? Math.max(0, ids.length - +limit)
                        : playerIdIndex - 1;
            }

            idsToUse = ids.slice(startIndex, startIndex + +limit);
        }

        let position = startIndex;

        return denormalize(idsToUse, [playerSchema], {players, users}).map(player => ({
            ...withIsBandit(player, banditId),
            position: ++position
        }));
    }
);
