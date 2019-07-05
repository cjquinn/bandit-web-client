import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';

// Actions
import { setFlash } from '../../../flash/actions';

// Schema
import { challenge as challengeSchema } from '../../../schema';

// Selectors
import { getClubId } from '../../../shared/selectors';

/**
 * Accept challenge
 */
export const acceptChallengeRequest = createAction('ACCEPT_CHALLENGE_REQUEST');
export const acceptChallengeSuccess = createAction('ACCEPT_CHALLENGE_SUCCESS');
export const acceptChallengeFailure = createAction('ACCEPT_CHALLENGE_FAILURE');

export const acceptChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(acceptChallengeRequest({clubId, challengeId}));

    return api.acceptChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(acceptChallengeSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'You have accepted the challenge', type: 'info'})))
        .then(() => api.trackEvent('challengeAccepted'))
        .catch(api.handleError(dispatch, acceptChallengeFailure));
};

/**
 * Create challenge
 */
export const createChallengeRequest = createAction('ADD_CHALLENGE_REQUEST');
export const createChallengeSuccess = createAction('ADD_CHALLENGE_SUCCESS');
export const createChallengeFailure = createAction('ADD_CHALLENGE_FAILURE');

export const createChallenge = data => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(createChallengeRequest({clubId}));

    return api.createChallenge(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(createChallengeSuccess(normalizedData)))
        .then(action => dispatch(push(`/challenges/${action.payload.result}`)))
        .then(() => api.trackEvent('challengeAdded'))
        .catch(api.handleError(dispatch, createChallengeFailure));
};

/**
 * Delete challenge
 */
export const deleteChallengeRequest = createAction('DELETE_CHALLENGE_REQUEST');
export const deleteChallengeSuccess = createAction('DELETE_CHALLENGE_SUCCESS');
export const deleteChallengeFailure = createAction('DELETE_CHALLENGE_FAILURE');

export const deleteChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(deleteChallengeRequest({clubId, challengeId}));

    return api.deleteChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(deleteChallengeSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Your challenge was deleted', type: 'info'})))
        .then(() => dispatch(push('/challenges')))
        .then(() => api.trackEvent('challengeDeleted'))
        .catch(api.handleError(dispatch, deleteChallengeFailure));
};

/**
 * Fetch challenge
 */
export const fetchChallengeRequest = createAction('FETCH_CHALLENGE_REQUEST');
export const fetchChallengeSuccess = createAction('FETCH_CHALLENGE_SUCCESS');
export const fetchChallengeFailure = createAction('FETCH_CHALLENGE_FAILURE');

export const fetchChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(fetchChallengeRequest({clubId, challengeId}));

    return api.fetchChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(fetchChallengeSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchChallengeFailure));
};

/**
 * Fetch challenges
 */
export const fetchChallengesRequest = createAction('FETCH_CHALLENGES_REQUEST');
export const fetchChallengesSuccess = createAction('FETCH_CHALLENGES_SUCCESS');
export const fetchChallengesFailure = createAction('FETCH_CHALLENGES_FAILURE');

export const fetchChallenges = (playerId, filter) => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(fetchChallengesRequest({clubId, playerId, filter}));

    return api.fetchChallenges(clubId, playerId, filter)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenges, [challengeSchema]))
        .then(normalizedData => dispatch(fetchChallengesSuccess({
            ...normalizedData,
            clubId,
            playerId,
            filter
        })))
        .catch(api.handleError(dispatch, fetchChallengesFailure));
};

/**
 * Report challenge
 */
export const reportChallengeRequest = createAction('REPORT_CHALLENGE_REQUEST');
export const reportChallengeSuccess = createAction('REPORT_CHALLENGE_SUCCESS');
export const reportChallengeFailure = createAction('REPORT_CHALLENGE_FAILURE');

export const reportChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(reportChallengeRequest({clubId, challengeId}));

    return api.reportChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(reportChallengeSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Your opponent has been reported', type: 'info'})))
        .then(() => dispatch(push('/challenges')))
        .then(() => api.trackEvent('challengeReported'))
        .catch(api.handleError(dispatch, reportChallengeFailure));
};

/**
 * Withdraw challenge
 */
export const withdrawChallengeRequest = createAction('WITHDRAW_CHALLENGE_REQUEST');
export const withdrawChallengeSuccess = createAction('WITHDRAW_CHALLENGE_SUCCESS');
export const withdrawChallengeFailure = createAction('WITHDRAW_CHALLENGE_FAILURE');

export const withdrawChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(withdrawChallengeRequest({clubId, challengeId}));

    return api.withdrawChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.challenge, challengeSchema))
        .then(normalizedData => dispatch(withdrawChallengeSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'You have withdrawn from the challenge', type: 'info'})))
        .then(() => dispatch(push('/challenges')))
        .then(() => api.trackEvent('challengeWithdrawn'))
        .catch(api.handleError(dispatch, withdrawChallengeFailure));
};
