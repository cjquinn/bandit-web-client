import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { push } from 'connected-react-router';

// Actions
import { setFlash } from '../../../flash/actions';

// Schema
import { club as clubSchema, match as matchSchema } from '../../../schema';

// Selectors
import { getMatchEntity, getPage } from './selectors';
import { getClubId } from '../../../shared/selectors';

/**
 * Add match
 */
export const addMatchRequest = createAction('ADD_MATCH_REQUEST');
export const addMatchSuccess = createAction('ADD_MATCH_SUCCESS');
export const addMatchFailure = createAction('ADD_MATCH_FAILURE');

export const addMatch = data => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(addMatchRequest());

    return api.addMatch(clubId, data)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(addMatchSuccess({
            ...normalize(data, {club: clubSchema, match: matchSchema}),
            result: data.match.id,
            clubId,
            playerId: ['all', data.match.player_a_id, data.match.player_b_id]
        })))
        .then(action => dispatch(push(`/matches/${action.payload.result}`)))
        .then(() => api.trackEvent('matchAdded'))
        .catch(api.handleError(dispatch, addMatchFailure));
};

/**
 * Delete match
 */
export const deleteMatchRequest = createAction('DELETE_MATCH_REQUEST');
export const deleteMatchSuccess = createAction('DELETE_MATCH_SUCCESS');
export const deleteMatchFailure = createAction('DELETE_MATCH_FAILURE');

export const deleteMatch = matchId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());
    const match = getMatchEntity(getState(), {matchId});
    
    dispatch(deleteMatchRequest());

    return api.deleteMatch(clubId, matchId)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(deleteMatchSuccess({
            ...normalize(data, {club: clubSchema, matches: [matchSchema]}),
            result: match.id,
            clubId,
            playerId: ['all', match.player_a_id, match.player_b_id]
        })))
        .then(() => dispatch(setFlash({message: 'Your match was deleted', type: 'info'})))
        .then(() => api.trackEvent('matchDeleted'))
        .catch(api.handleError(dispatch, deleteMatchFailure));
};

/**
 * Fetch match
 */
export const fetchMatchRequest = createAction('FETCH_MATCH_REQUEST');
export const fetchMatchSuccess = createAction('FETCH_MATCH_SUCCESS');
export const fetchMatchFailure = createAction('FETCH_MATCH_FAILURE');

export const fetchMatch = matchId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(fetchMatchRequest());

    return api.fetchMatch(clubId, matchId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.match, matchSchema))
        .then(normalizedData => dispatch(fetchMatchSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchMatchFailure));
};

/**
 * Fetch matches
 */
export const fetchMatchesRequest = createAction('FETCH_MATCHES_REQUEST');
export const fetchMatchesSuccess = createAction('FETCH_MATCHES_SUCCESS');
export const fetchMatchesFailure = createAction('FETCH_MATCHES_FAILURE');

export const fetchMatches = (playerId, page) => (dispatch, getState, api) => {
    const clubId = getClubId(getState());
    page = page || 1;
    
    dispatch(fetchMatchesRequest({clubId, playerId}));

    return api.fetchMatches(clubId, playerId, page)
        .then(api.checkStatus)  
        .then(response => dispatch(fetchMatchesSuccess({
            ...normalize(response.data.matches, [matchSchema]),
            total: response.data.total,
            clubId,
            page,
            playerId
        })))
        .catch(api.handleError(dispatch, fetchMatchesFailure, {clubId, playerId}));
};

/**
 * Fetch more matches
 */
export const fetchMoreMatches = playerId => (dispatch, getState, api) => {
    const page = getPage(getState(), {playerId}) + 1;

    api.trackEvent('matchLoadedMore');

    return dispatch(fetchMatches(playerId, page));
};
