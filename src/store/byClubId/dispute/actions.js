import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { club as clubSchema, dispute as disputeSchema, match as matchSchema } from '../../schema';

// Selectors
import { getClubId } from '../../shared/selectors';

/**
 * Add dispute
 */
export const addDisputeRequest = createAction('ADD_DISPUTE_REQUEST');
export const addDisputeSuccess = createAction('ADD_DISPUTE_SUCCESS');
export const addDisputeFailure = createAction('ADD_DISPUTE_FAILURE');

export const addDispute = data => (dispatch, getState, api) => {
    const clubId = getClubId(getState());
    
    dispatch(addDisputeRequest({clubId}));

    return api.addDispute(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.dispute, disputeSchema))
        .then(normalizedData => dispatch(addDisputeSuccess({
            ...normalizedData,
            clubId
        })))
        .then(() => api.trackEvent('disputeAdded'))
        .catch(api.handleError(dispatch, addDisputeFailure));
};

/**
 * Close dispute
 */
export const closeDisputeRequest = createAction('CLOSE_DISPUTE_REQUEST');
export const closeDisputeSuccess = createAction('CLOSE_DISPUTE_SUCCESS');
export const closeDisputeFailure = createAction('CLOSE_DISPUTE_FAILURE');

export const closeDispute = (disputeId, data) => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(closeDisputeRequest({clubId}));

    return api.closeDispute(clubId, disputeId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data, {club: clubSchema, dispute: disputeSchema, matches: [matchSchema]}))
        .then(normalizedData => dispatch(closeDisputeSuccess({
            ...normalizedData,
            result: normalizedData.result.dispute
        })))
        .then(() => api.trackEvent('disputeClosed'))
        .catch(api.handleError(dispatch, closeDisputeFailure));
};

/**
 * Delete dispute
 */
export const deleteDisputeRequest = createAction('DELETE_DISPUTE_REQUEST');
export const deleteDisputeSuccess = createAction('DELETE_DISPUTE_SUCCESS');
export const deleteDisputeFailure = createAction('DELETE_DISPUTE_FAILURE');

export const deleteDispute = disputeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(deleteDisputeRequest({clubId, disputeId}));

    return api.deleteDispute(clubId, disputeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.dispute, disputeSchema))
        .then(normalizedData => dispatch(deleteDisputeSuccess({
            ...normalizedData,
            clubId
        })))
        .then(() => api.trackEvent('disputeDeleted'))
        .catch(api.handleError(dispatch, deleteDisputeFailure));
};


/**
 * Fetch disputes
 */
export const fetchDisputesRequest = createAction('FETCH_DISPUTES_REQUEST');
export const fetchDisputesSuccess = createAction('FETCH_DISPUTES_SUCCESS');
export const fetchDisputesFailure = createAction('FETCH_DISPUTES_FAILURE');

export const fetchDisputes = disputeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(fetchDisputesRequest({clubId, disputeId}));

    return api.fetchDisputes(clubId, disputeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.disputes, [disputeSchema]))
        .then(normalizedData => dispatch(fetchDisputesSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, fetchDisputesFailure));
};
