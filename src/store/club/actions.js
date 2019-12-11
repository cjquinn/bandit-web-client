import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';

// Actions
import { setFlash } from '../flash/actions';

// Schema
import { club as clubSchema } from '../schema';

// Selectors
import { getClubId } from '../shared/selectors';

/**
 * Create club
 */
export const createClubRequest = createAction('CREATE_CLUB_REQUEST');
export const createClubSuccess = createAction('CREATE_CLUB_SUCCESS');
export const createClubFailure = createAction('CREATE_CLUB_FAILURE');

export const createClub = data => (dispatch, getState, api) => {
    dispatch(createClubRequest());

    return api.createClub(data)
        .then(api.checkStatus)
        .then(api.setClubId)
        .then(api.setJwt)
        .then(response => normalize(response.data.club, clubSchema))
        .then(normalizedData => dispatch(createClubSuccess(normalizedData)))
        .then(() => dispatch(push('/')))
        .then(() => api.trackEvent('clubCreated', {clubName: data.name}))
        .catch(api.handleError(dispatch, createClubFailure));
};

/**
 * Fetch club
 */
export const fetchClubRequest = createAction('FETCH_CLUB_REQUEST');
export const fetchClubSuccess = createAction('FETCH_CLUB_SUCCESS');
export const fetchClubFailure = createAction('FETCH_CLUB_FAILURE');

export const fetchClub = clubId => (dispatch, getState, api) => {
    const nextClubId = clubId || getClubId(getState());

    if (!nextClubId) {
        return dispatch(push('/clubs'));
    }

    dispatch(fetchClubRequest());

    return api.fetchClub(nextClubId)
        .then(api.checkStatus)
        .then(api.setClubId)
        .then(({ data }) => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({clubName: data.club.name});

            return data;
        })
        .then(({ club }) => normalize(club, clubSchema))
        .then(normalizedData => dispatch(fetchClubSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchClubFailure));
};

/**
 * Fetch clubs
 */
export const fetchClubsRequest = createAction('FETCH_CLUBS_REQUEST');
export const fetchClubsSuccess = createAction('FETCH_CLUBS_SUCCESS');
export const fetchClubsFailure = createAction('FETCH_CLUBS_FAILURE');

export const fetchClubs = () => (dispatch, getState, api) => {
    dispatch(fetchClubsRequest());

    return api.fetchClubs()
        .then(api.checkStatus)
        .then(response => normalize(response.data.clubs, [clubSchema]))
        .then(normalizedData => dispatch(fetchClubsSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchClubsFailure));
};

/**
 * Update club
 */
export const updateClubRequest = createAction('UPDATE_CLUB_REQUEST');
export const updateClubSuccess = createAction('UPDATE_CLUB_SUCCESS');
export const updateClubFailure = createAction('UPDATE_CLUB_FAILURE');

export const updateClub = data => (dispatch, getState, api) => {
    dispatch(updateClubRequest());

    return api.updateClub(getClubId(getState()), data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.club, clubSchema))
        .then(normalizedData => dispatch(updateClubSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Your club settings were updated', type: 'success'})))
        .catch(api.handleError(dispatch, updateClubFailure));
};
