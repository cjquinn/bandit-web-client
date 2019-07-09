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
    const clubId = getClubId(getState());

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

export const fetchPlayers = () => (dispatch, getState, api) => {
    const clubId = getClubId(getState());

    dispatch(fetchPlayersRequest({clubId}));

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
    const clubId = getClubId(getState());

    dispatch(invitePlayerRequest());

    return api.invitePlayer(clubId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.player, playerSchema))
        .then(normalizedData => dispatch(invitePlayerSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Invite sent', type: 'success'})))
        .then(() => dispatch(push('/players')))
        .then(() => api.trackEvent('playerInvited'))
        .catch(api.handleError(dispatch, invitePlayerFailure));
};

/**
 * Order players by...
 */
export const ORDER_PLAYERS_BY = 'ORDER_PLAYERS_BY';

export const orderPlayersBy = orderBy => (dispatch, getState, api) => {
    api.trackEvent('playerOrdered');

    return dispatch({
        type: ORDER_PLAYERS_BY,
        payload: {
            clubId: getClubId(getState()),
            orderBy
        }
    });
};
