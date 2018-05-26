import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getClubId } from '../../user/selectors';

/**
 * Fetch leaderboard
 */
export const fetchLeaderboardRequest = createAction('FETCH_LEADERBOARD_REQUEST');
export const fetchLeaderboardSuccess = createAction('FETCH_LEADERBOARD_SUCCESS');
export const fetchLeaderboardFailure = createAction('FETCH_LEADERBOARD_FAILURE');

export const fetchLeaderboard = period => (dispatch, getState, api) => {
    dispatch(fetchLeaderboardRequest());

    const clubId = getClubId(getState());

    return api.fetchLeaderboard(clubId, period)
        .then(api.checkStatus)
        .then(response => normalize(response.data.players, [playerSchema]))
        .then(normalizedData => dispatch(fetchLeaderboardSuccess({
            ...normalizedData,
            clubId,
            period
        })))
        .catch(api.handleError(dispatch, fetchLeaderboardFailure));
};
