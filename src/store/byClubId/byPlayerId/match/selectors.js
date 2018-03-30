import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { match as matchSchema } from '../../../schema';

// Selectors
import { getPlayerEntities } from '../../player/selectors';
import { getByPlayerIdState } from '../selectors';
import { getLimit } from '../../../props/selectors';
import { makeIsFetchingSelector } from '../../../shared/selectors';
import { getUserEntities } from '../../../user/selectors';

export const initialState = {
    ids: [],
    isFetching: false,
    page: 1,
    total: 0
};

// Normalized
export const getMatchEntity = (state, props) => state.entities.matches[props.match.params.matchId];

export const getMatchEntities = state => state.entities.matches;

// State
const getMatchState = (state, props) =>
    getByPlayerIdState(state, props)
        ? getByPlayerIdState(state, props).match
        : initialState;

export const getIds = (state, props) => getMatchState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getMatchState);

export const getPage = (state, props) => getMatchState(state, props).page;

// Memoized
export const makeGetMatch = () => createSelector(
    [getMatchEntity, getPlayerEntities, getUserEntities],
    (match, players, users) =>
        match
            ? denormalize(
                match.id,
                matchSchema,
                {
                    disputes: {},
                    matches: {[match.id]: match},
                    players,
                    users
                }
            )
            : undefined
);  

export const makeGetMatches = () => createSelector(
    [getIds, getLimit, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, limit, matches, players, users) => denormalize(
        limit ? ids.slice(0, limit) : ids,
        [matchSchema],
        {
            disputes: {},
            matches,
            players,
            users
        }
    )
);
