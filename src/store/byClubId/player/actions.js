import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

// Schema
import { player as playerSchema } from '../../schema';

/**
 * Fetch player
 */
export const fetchPlayerRequest = createAction('FETCH_PLAYER_REQUEST');
export const fetchPlayerSuccess = createAction('FETCH_PLAYER_SUCCESS');
export const fetchPlayerFailure = createAction('FETCH_PLAYER_FAILURE');

export const fetchPlayer = (clubId, playerId) => (dispatch, getState, api) => {
    dispatch(fetchPlayerRequest());

    return api.fetchPlayer(clubId, playerId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.player, playerSchema))
        .then(normalizedData => dispatch(fetchPlayerSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchPlayerFailure));
};

/**
 * Fetch players
 */
export const fetchPlayersRequest = createAction('FETCH_PLAYERS_REQUEST');
export const fetchPlayersSuccess = createAction('FETCH_PLAYERS_SUCCESS');
export const fetchPlayersFailure = createAction('FETCH_PLAYERS_FAILURE');

export const fetchPlayers = clubId => (dispatch, getState, api) => {
    dispatch(fetchPlayersRequest());

    return api.fetchPlayers(clubId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.players, [playerSchema]))
        .then(normalizedData => dispatch(fetchPlayersSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchPlayersFailure));
};

/**
 * Invite player
 */
export const invitePlayerRequest = createAction('INVITE_PLAYER_REQUEST');
export const invitePlayerSuccess = createAction('INVITE_PLAYER_SUCCESS');
export const invitePlayerFailure = createAction('INVITE_PLAYER_FAILURE');

export const invitePlayer = (clubId, data) => (dispatch, getState, api) => {
    dispatch(invitePlayerRequest());

    return api.invitePlayer(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.player, playerSchema))
        .then(normalizedData => dispatch(invitePlayerSuccess(normalizedData)))
        .catch(api.handleError(dispatch, invitePlayerFailure));
};


/**
 * Order players by...
 */
export const orderPlayersBy = createAction('ORDER_PLAYERS_BY');
