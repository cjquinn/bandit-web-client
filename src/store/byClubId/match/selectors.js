import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { match as matchSchema } from '../../schema';

// Selectors
import { getPlayerEntities } from '../player/selectors';
import { getMatchByClubId } from '../selectors';
import { makeFetchSelectors } from '../../shared/selectors';
import { getUserEntities } from '../../user/selectors';

const fetchSelectors = makeFetchSelectors(getMatchByClubId);

export const { getDidError, getIsFetching } = fetchSelectors;

export const getLimit = (state, props) => props.limit;

export const getPage = (state, props) => getMatchByClubId(state, props).page;

export const getMatchEntity = (state, props) => state.entities.matches[props.match.params.matchId];

export const getMatchEntities = state => state.entities.matches;

export const getIds = createSelector(
    [fetchSelectors.getIds, getLimit],
    (ids, limit) => limit ? ids.splice(0, limit) : ids
);

export const makeGetMatches = () => createSelector(
    [getIds, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, matches, players, users) => {
        return denormalize(ids, [matchSchema], {matches, players, users});
    }
);
