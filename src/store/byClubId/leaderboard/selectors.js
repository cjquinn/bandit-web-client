import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { makeIsFetchingSelector } from '../../shared/selectors';
import { getPlayerEntities } from '../player/selectors';
import { getUserEntities } from '../../user/selectors';

// State
const getLeaderboardState = (state, props) => getByClubIdState(state, props).leaderboard[props.period];

export const getIds = (state, props) => getLeaderboardState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getLeaderboardState);

export const getLimit = (_, props) => props.limit;

export const getPlayerId = (_, props) => props.playerId;

// Memoized
export const makeGetLeaderboard = () => createSelector(
    [getIds, getLimit, getPlayerId, getPlayerEntities, getUserEntities],
    (ids, limit, playerId, players, users) => {
        let idsToUse = ids;

        if (limit) {
            let startIndex = 0;
                
            if (playerId) {
                let playerIdIndex = ids.indexOf(playerId);

                if (playerIdIndex !== -1) {
                    startIndex = playerIdIndex === 0
                        ? playerIdIndex
                        : playerIdIndex === ids.length - 1
                            ? ids.length - limit
                            : playerIdIndex - 1;
                }
            }

            idsToUse = ids.slice(startIndex, startIndex + limit);
        }

        return denormalize(idsToUse, [playerSchema], {players, users});
    }
);
