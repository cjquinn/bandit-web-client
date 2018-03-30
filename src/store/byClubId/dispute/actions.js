import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { dispute as disputeSchema } from '../../schema';

/**
 * Add dispute
 */
export const addDisputeRequest = createAction('ADD_DISPUTE_REQUEST');
export const addDisputeSuccess = createAction('ADD_DISPUTE_SUCCESS');
export const addDisputeFailure = createAction('ADD_DISPUTE_FAILURE');

export const addDispute = (clubId, data) => (dispatch, getState, api) => {
    dispatch(addDisputeRequest());

    return api.addDispute(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.dispute, disputeSchema))
        .then(normalizedData => dispatch(addDisputeSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, addDisputeFailure));
};

/**
 * Close dispute
 */
export const closeDisputeRequest = createAction('CLOSE_DISPUTE_REQUEST');
export const closeDisputeSuccess = createAction('CLOSE_DISPUTE_SUCCESS');
export const closeDisputeFailure = createAction('CLOSE_DISPUTE_FAILURE');

export const closeDispute = (clubId, disputeId, data) => (dispatch, getState, api) => {
    dispatch(closeDisputeRequest());

    return api.closeDispute(clubId, disputeId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.disputes, [disputeSchema]))
        .then(normalizedData => dispatch(closeDisputeSuccess(normalizedData)))
        .catch(api.handleError(dispatch, closeDisputeFailure));
};

/**
 * Delete dispute
 */
export const deleteDisputeRequest = createAction('DELETE_DISPUTE_REQUEST');
export const deleteDisputeSuccess = createAction('DELETE_DISPUTE_SUCCESS');
export const deleteDisputeFailure = createAction('DELETE_DISPUTE_FAILURE');

export const deleteDispute = (clubId, disputeId) => (dispatch, getState, api) => {
    dispatch(deleteDisputeRequest());

    return api.deleteDispute(clubId, disputeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.dispute, disputeSchema))
        .then(normalizedData => dispatch(deleteDisputeSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, deleteDisputeFailure));
};


/**
 * Fetch disputes
 */
export const fetchDisputesRequest = createAction('FETCH_DISPUTES_REQUEST');
export const fetchDisputesSuccess = createAction('FETCH_DISPUTES_SUCCESS');
export const fetchDisputesFailure = createAction('FETCH_DISPUTES_FAILURE');

export const fetchDisputes = (clubId, disputeId) => (dispatch, getState, api) => {
    dispatch(fetchDisputesRequest());

    return api.fetchDisputes(clubId, disputeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.disputes, [disputeSchema]))
        .then(normalizedData => dispatch(fetchDisputesSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, fetchDisputesFailure));
};
