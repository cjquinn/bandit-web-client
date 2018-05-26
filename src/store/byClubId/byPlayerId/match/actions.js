import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { match as matchSchema } from '../../../schema';

// Selectors
import { getPage } from './selectors';

/**
 * Add match
 */
export const addMatchRequest = createAction('ADD_MATCH_REQUEST');
export const addMatchSuccess = createAction('ADD_MATCH_SUCCESS');
export const addMatchFailure = createAction('ADD_MATCH_FAILURE');

export const addMatch = data => (dispatch, getState, api) => {
    dispatch(addMatchRequest());

    const clubId = api.getClubId();

    return api.addMatch(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.match, matchSchema))
        .then(normalizedData => dispatch(addMatchSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, addMatchFailure));
};

/**
 * Fetch match
 */
export const deleteMatchRequest = createAction('DELETE_MATCH_REQUEST');
export const deleteMatchSuccess = createAction('DELETE_MATCH_SUCCESS');
export const deleteMatchFailure = createAction('DELETE_MATCH_FAILURE');

export const deleteMatch = matchId => (dispatch, getState, api) => {
    dispatch(deleteMatchRequest());

    const clubId = api.getClubId();

    return api.deleteMatch(clubId, matchId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.matches, [matchSchema]))
        .then(normalizedData => dispatch(deleteMatchSuccess({
            ...normalizedData,
            clubId,
            matchId
        })))
        .catch(api.handleError(dispatch, deleteMatchFailure));
};

/**
 * Fetch match
 */
export const fetchMatchRequest = createAction('FETCH_MATCH_REQUEST');
export const fetchMatchSuccess = createAction('FETCH_MATCH_SUCCESS');
export const fetchMatchFailure = createAction('FETCH_MATCH_FAILURE');

export const fetchMatch = matchId => (dispatch, getState, api) => {
    dispatch(fetchMatchRequest());

    return api.fetchMatch(api.getClubId(), matchId)
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
    dispatch(fetchMatchesRequest());

    const clubId = api.getClubId();
    page = page || 1;

    return api.fetchMatches(clubId, playerId, page)
        .then(api.checkStatus)  
        .then(response => normalize(response.data.matches, [matchSchema]))
        .then(normalizedData => dispatch(fetchMatchesSuccess({
            ...normalizedData,
            clubId,
            page,
            playerId
        })))
        .catch(api.handleError(dispatch, fetchMatchesFailure));
};

/**
 * Fetch more matches
 */
export const fetchMoreMatches = playerId => (dispatch, getState, api) => {
    const page = getPage(getState(), {match: {params: {clubId: api.getClubId(), playerId}}}) + 1;

    return dispatch(fetchMatches(playerId, page));
};
