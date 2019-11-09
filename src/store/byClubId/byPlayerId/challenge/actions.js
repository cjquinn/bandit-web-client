import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';

// Actions
import { setFlash } from '../../../flash/actions';

// Schema
import { challenge as challengeSchema } from '../../../schema';

// Selectors
import { getClubId } from '../../../shared/selectors';
import { getCurrentPlayerId } from '../../../user/selectors';

/**
 * Accept challenge
 */
export const acceptChallengeRequest = createAction('ACCEPT_CHALLENGE_REQUEST');
export const acceptChallengeSuccess = createAction('ACCEPT_CHALLENGE_SUCCESS');
export const acceptChallengeFailure = createAction('ACCEPT_CHALLENGE_FAILURE');

export const acceptChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(acceptChallengeRequest());

    return api.acceptChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(acceptChallengeSuccess({
            ...normalize(data.challenge, challengeSchema),
            clubId,
            playerId: ['all', data.challenge.player_a_id, data.challenge.player_b_id]
        })))
        .then(() => api.trackEvent('challengeAccepted'))
        .then(() => dispatch(setFlash({message: 'You have accepted the challenge', type: 'info'})))
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

    dispatch(createChallengeRequest());

    return api.createChallenge(clubId, data)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(createChallengeSuccess({
            ...normalize(data.challenge, challengeSchema),
            clubId,
            playerId: ['all', data.challenge.player_a_id]
        })))
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

    dispatch(deleteChallengeRequest());

    return api.deleteChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(({ data }) => {
            const playerId = ['all', data.challenge.player_a_id];

            if (data.challenge.player_b_id !== null) {
                playerId.push(data.challenge.player_b_id);
            }

            return dispatch(deleteChallengeSuccess({
                ...normalize(data.challenge, challengeSchema),
                clubId,
                playerId
            }));
        })
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

    dispatch(fetchChallengeRequest());

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
        .catch(api.handleError(dispatch, fetchChallengesFailure, {clubId, playerId, filter}));
};

/**
 * Report challenge
 */
export const reportChallengeRequest = createAction('REPORT_CHALLENGE_REQUEST');
export const reportChallengeSuccess = createAction('REPORT_CHALLENGE_SUCCESS');
export const reportChallengeFailure = createAction('REPORT_CHALLENGE_FAILURE');

export const reportChallenge = challengeId => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(reportChallengeRequest());

    return api.reportChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(reportChallengeSuccess({
            ...normalize(data.challenge, challengeSchema),
            clubId,
            playerId: ['all', data.challenge.player_a_id, data.challenge.player_b_id]
        })))
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
    const currentPlayerId = getCurrentPlayerId(getState());

    dispatch(withdrawChallengeRequest());

    return api.withdrawChallenge(clubId, challengeId)
        .then(api.checkStatus)
        .then(({ data }) => dispatch(withdrawChallengeSuccess({
            ...normalize(data.challenge, challengeSchema),
            clubId,
            playerId: ['all', data.challenge.player_a_id, currentPlayerId]
        })))
        .then(() => dispatch(setFlash({message: 'You have withdrawn from the challenge', type: 'info'})))
        .then(() => dispatch(push('/challenges')))
        .then(() => api.trackEvent('challengeWithdrawn'))
        .catch(api.handleError(dispatch, withdrawChallengeFailure));
};
