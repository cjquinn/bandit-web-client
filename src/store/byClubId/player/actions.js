import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';

// Actions
import { setFlash } from '../../flash/actions';

// Schema
import { player as playerSchema } from '../../schema';

// Selectors
import { getClubId } from '../../shared/selectors';

/**
 * Fetch player
 */
export const fetchPlayerRequest = createAction('FETCH_PLAYER_REQUEST');
export const fetchPlayerSuccess = createAction('FETCH_PLAYER_SUCCESS');
export const fetchPlayerFailure = createAction('FETCH_PLAYER_FAILURE');

export const fetchPlayer = playerId => (dispatch, getState, api) => {
    dispatch(fetchPlayerRequest());

    const clubId = getClubId(getState());

    return api.fetchPlayer(clubId, playerId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.player, playerSchema))
        .then(normalizedData => dispatch(fetchPlayerSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, fetchPlayerFailure));
};

/**
 * Fetch players
 */
export const fetchPlayersRequest = createAction('FETCH_PLAYERS_REQUEST');
export const fetchPlayersSuccess = createAction('FETCH_PLAYERS_SUCCESS');
export const fetchPlayersFailure = createAction('FETCH_PLAYERS_FAILURE');

export const fetchPlayers = () => (dispatch, getState, api) => {
    dispatch(fetchPlayersRequest());

    const clubId = getClubId(getState());

    return api.fetchPlayers(clubId)
        .then(api.checkStatus)
        .then(response => normalize(response.data.players, [playerSchema]))
        .then(normalizedData => dispatch(fetchPlayersSuccess({
            ...normalizedData,
            clubId
        })))
        .catch(api.handleError(dispatch, fetchPlayersFailure));
};

/**
 * Invite player
 */
export const invitePlayerRequest = createAction('INVITE_PLAYER_REQUEST');
export const invitePlayerSuccess = createAction('INVITE_PLAYER_SUCCESS');
export const invitePlayerFailure = createAction('INVITE_PLAYER_FAILURE');

export const invitePlayer = data => (dispatch, getState, api) => {
    dispatch(invitePlayerRequest());

    return api.invitePlayer(getClubId(getState()), data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.player, playerSchema))
        .then(normalizedData => dispatch(invitePlayerSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Invite sent', type: 'success'})))
        .then(() => dispatch(push('/players')))
        .catch(api.handleError(dispatch, invitePlayerFailure));
};


/**
 * Order players by...
 */
export const ORDER_PLAYERS_BY = 'ORDER_PLAYERS_BY';

export const orderPlayersBy = orderBy => (dispatch, getState) =>
    dispatch({
        type: ORDER_PLAYERS_BY,
        payload: {
            clubId: getClubId(getState()),
            orderBy
        }
    });
