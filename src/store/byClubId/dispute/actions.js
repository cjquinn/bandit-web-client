import { createAction } from 'redux-actions';

/**
 * Add dispute
 */
export const addDisputeRequest = createAction('ADD_DISPUTE_REQUEST');
export const addDisputeSuccess = createAction('ADD_DISPUTE_SUCCESS');
export const addDisputeFailure = createAction('ADD_DISPUTE_FAILURE');

/**
 * Close dispute
 */
export const closeDisputeRequest = createAction('CLOSE_DISPUTE_REQUEST');
export const closeDisputeSuccess = createAction('CLOSE_DISPUTE_SUCCESS');
export const closeDisputeFailure = createAction('CLOSE_DISPUTE_FAILURE');

/**
 * Delete dispute
 */
export const deleteDisputeRequest = createAction('DELETE_DISPUTE_REQUEST');
export const deleteDisputeSuccess = createAction('DELETE_DISPUTE_SUCCESS');
export const deleteDisputeFailure = createAction('DELETE_DISPUTE_FAILURE');

/**
 * Fetch disputes
 */
export const fetchDisputesRequest = createAction('FETCH_DISPUTES_REQUEST');
export const fetchDisputesSuccess = createAction('FETCH_DISPUTES_SUCCESS');
export const fetchDisputesFailure = createAction('FETCH_DISPUTES_FAILURE');
