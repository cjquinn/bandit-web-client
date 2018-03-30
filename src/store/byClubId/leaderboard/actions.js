import { createAction } from 'redux-actions';

/**
 * Fetch leaderboard
 */
export const fetchLeaderboardRequest = createAction('FETCH_LEADERBOARD_REQUEST');
export const fetchLeaderboardSuccess = createAction('FETCH_LEADERBOARD_SUCCESS');
export const fetchLeaderboardFailure = createAction('FETCH_LEADERBOARD_FAILURE');
