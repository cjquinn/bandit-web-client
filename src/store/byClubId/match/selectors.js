import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { match as matchSchema } from '../../schema';

// Selectors
import { getPlayerEntities } from '../player/selectors';
import { makeFetchSelectors } from '../../shared/selectors';
import { getMatchByClubId } from '../selectors';
import { getUserEntities } from '../../user/selectors';

export const { getDidError, getIds, getIsFetching } = makeFetchSelectors();

export const getPage = matchState => matchState.page;

export const getMatchEntity = (state, props) => state.entities.matches[props.match.params.matchId];

export const getMatchEntities = state => state.entities.matches;

export const makeGetDidError = () => createSelector(
    getMatchByClubId,
    playerState => getDidError(playerState)
);

export const makeGetIsFetching = () => createSelector(
    getMatchByClubId,
    playerState => getIsFetching(playerState)
);

export const makeGetPage = () => createSelector(
    getMatchByClubId,
    playerState => getPage(playerState)
);

export const makeGetMatches = () => createSelector(
    [getMatchByClubId, getMatchEntities, getPlayerEntities, getUserEntities],
    (matchState, matches, players, users) => {
        return denormalize(getIds(matchState), [matchSchema], {matches, players, users});
    }
);
