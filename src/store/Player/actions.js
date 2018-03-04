import { createAction } from 'redux-actions';

/**
 * Fetch players
 */
export const fetchPlayersRequest = createAction('FETCH_PLAYERS_REQUEST');
export const fetchPlayersSuccess = createAction('FETCH_PLAYERS_SUCCESS');
export const fetchPlayersFailure = createAction('FETCH_PLAYERS_FAILURE');

/**
 * Order players by...
 */
export const orderPlayersBy = createAction('ORDER_PLAYERS_BY');
