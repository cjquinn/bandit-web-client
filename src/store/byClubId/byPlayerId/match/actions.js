import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';

// Actions
import { setFlash } from '../../../flash/actions';

// Schema
import { club as clubSchema, match as matchSchema } from '../../../schema';

// Selectors
import { getPage } from './selectors';
import { getClubId } from '../../../shared/selectors';

/**
 * Add match
 */
export const addMatchRequest = createAction('ADD_MATCH_REQUEST');
export const addMatchSuccess = createAction('ADD_MATCH_SUCCESS');
export const addMatchFailure = createAction('ADD_MATCH_FAILURE');

export const addMatch = data => (dispatch, getState, api) => {
    dispatch(addMatchRequest());

    const clubId = getClubId(getState());

    return api.addMatch(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data, {club: clubSchema, match: matchSchema}))
        .then(normalizedData => dispatch(addMatchSuccess({
            ...normalizedData,
            result: normalizedData.result.match,
            clubId
        })))
        .then(action => dispatch(push(`/matches/${action.payload.result}`)))
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

    const clubId = getClubId(getState());

    return api.deleteMatch(clubId, matchId)
        .then(api.checkStatus)
        .then(response => normalize(response.data, {club: clubSchema, matches: [matchSchema]}))
        .then(normalizedData => dispatch(deleteMatchSuccess({
            ...normalizedData,
            result: normalizedData.result.matches,
            clubId,
            matchId
        })))
        .then(() => dispatch(setFlash({message: 'Your match was deleted', type: 'info'})))
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

    return api.fetchMatch(getClubId(getState()), matchId)
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

    const clubId = getClubId(getState());
    page = page || 1;

    return api.fetchMatches(clubId, playerId, page)
        .then(api.checkStatus)  
        .then(response => dispatch(fetchMatchesSuccess({
            ...normalize(response.data.matches, [matchSchema]),
            total: response.data.total,
            clubId,
            page,
            playerId
        })))
        .catch(api.handleError(dispatch, fetchMatchesFailure));
};

/**
 * Fetch more matches
 */
export const fetchMoreMatches = playerId => (dispatch, getState) => {
    const page = getPage(getState(), {match: {params: {playerId}}}) + 1;

    return dispatch(fetchMatches(playerId, page));
};
