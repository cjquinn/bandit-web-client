import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { match as matchSchema } from '../../../schema';

// Selectors
import { getPlayerEntities } from '../../player/selectors';
import { getMatchByPlayerId } from '../selectors';
import { makeFetchSelectors } from '../../../shared/selectors';
import { getUserEntities } from '../../../user/selectors';

const fetchSelectors = makeFetchSelectors(getMatchByPlayerId);

export const { getDidError, getIsFetching } = fetchSelectors;

export const getLimit = (_, props) => props.limit;

export const getPage = (state, props) => getMatchByPlayerId(state, props).page;

export const getMatchEntity = (state, props) => state.entities.matches[props.match.params.matchId];

export const getMatchEntities = state => state.entities.matches;

export const getIds = createSelector(
    [fetchSelectors.getIds, getLimit],
    (ids, limit) => limit ? ids.splice(0, limit) : ids
);

export const makeGetMatch = () => createSelector(
    [getMatchEntity, getPlayerEntities, getUserEntities],
    (match, players, users) =>
        denormalize(match.id, matchSchema, {
            matches: {[match.id]: match},
            players,
            users
        })
);  

export const makeGetMatches = () => createSelector(
    [getIds, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, matches, players, users) =>
        denormalize(ids, [matchSchema], {matches, players, users})
);
