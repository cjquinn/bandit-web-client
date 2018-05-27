import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { club as clubSchema, dispute as disputeSchema, match as matchSchema } from '../../schema';

// Selectors
import { getClubId } from '../../user/selectors';

/**
 * Add dispute
 */
export const addDisputeRequest = createAction('ADD_DISPUTE_REQUEST');
export const addDisputeSuccess = createAction('ADD_DISPUTE_SUCCESS');
export const addDisputeFailure = createAction('ADD_DISPUTE_FAILURE');

export const addDispute = data => (dispatch, getState, api) => {
    dispatch(addDisputeRequest());

    const clubId = getClubId(getState());

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

export const closeDispute = (disputeId, data) => (dispatch, getState, api) => {
    dispatch(closeDisputeRequest());

    return api.closeDispute(getClubId(getState()), disputeId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data, {club: clubSchema, dispute: disputeSchema, matches: [matchSchema]}))
        .then(normalizedData => dispatch(closeDisputeSuccess({
            ...normalizedData,
            result: normalizedData.result.dispute
        })))
        .catch(api.handleError(dispatch, closeDisputeFailure));
};

/**
 * Delete dispute
 */
export const deleteDisputeRequest = createAction('DELETE_DISPUTE_REQUEST');
export const deleteDisputeSuccess = createAction('DELETE_DISPUTE_SUCCESS');
export const deleteDisputeFailure = createAction('DELETE_DISPUTE_FAILURE');

export const deleteDispute = disputeId => (dispatch, getState, api) => {
    dispatch(deleteDisputeRequest());

    const clubId = getClubId(getState());

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

export const fetchDisputes = disputeId => (dispatch, getState, api) => {
    dispatch(fetchDisputesRequest());

    const clubId = getClubId(getState());

    return api.fetchDisputes(clubId, disputeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.disputes, [disputeSchema]))
        .then(normalizedData => dispatch(fetchDisputesSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, fetchDisputesFailure));
};
