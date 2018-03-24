import { createAction } from 'redux-actions';

/**
 * Fetch matches
 */
export const fetchMatchesRequest = createAction('FETCH_MATCHES_REQUEST');
export const fetchMatchesSuccess = createAction('FETCH_MATCHES_SUCCESS');
export const fetchMatchesFailure = createAction('FETCH_MATCHES_FAILURE');
