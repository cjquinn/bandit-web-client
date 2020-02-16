import axios from 'axios';
import { forIn, isPlainObject } from 'lodash';
import { SubmissionError } from 'redux-form';
import { push } from 'connected-react-router';

// Actions
import { setFlash } from './flash/actions';
import { signOut } from './user/actions';

// Endpoints
export * from './club/endpoints';
export * from './byClubId/byPlayerId/challenge/endpoints';
export * from './byClubId/byPlayerId/match/endpoints';
export * from './byClubId/dispute/endpoints';
export * from './byClubId/leaderboard/endpoints';
export * from './byClubId/player/endpoints';
export * from './user/endpoints';

/**
 * Google tag stuff
 */
export const trackEvent = (event, data = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        ...data
    });
};

/**
 * Function to flattern cakephp error format
 */
const formatErrors = errors => {
    let formattedErrors = {};

    forIn(errors, (error, key) => {
        if (isPlainObject(error)) {
            formattedErrors[key] = formatErrors(error);
        } else {
            // If multiple errors on one field take last error
            formattedErrors = error;
        }
    });

    return formattedErrors;
};

export const checkStatus = response => {
    if (response.status >= 200 &&
        response.status < 300
    ) {
        return response;
    }

    throw response;
};

export const handleError = (dispatch, failure, payload = null) => response => {
    if (payload) {
        dispatch(failure(payload));
    } else {
        dispatch(failure());
    }

    switch (response.status) {
        case 400:
            throw new SubmissionError(formatErrors(response.data.errors));

        case 401:
            dispatch(setFlash({
                message: response.data.message,
                type: 'info'
            }));

            return dispatch(push('/sign-in'));

        case 403:
            return dispatch(signOut());

        case 404:
            return dispatch(push('/not-found'));

        default:
            return dispatch(push('/error'));
    }
};

/**
 * An instance of axios to use for all requests
 */
export const instance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        ...(
            getJwt()
                ? {Authorization: `Bearer ${getJwt()}`}
                : {}
        )
    },
    validateStatus: () => true
});

const CLUB_ID = 'clubId';

export const getClubId = () => {
    const clubId = window.localStorage.getItem(CLUB_ID);

    return clubId ? +clubId : null;
};

export const setClubId = response => {
    if (response.data.user || response.data.club) {
        const clubId = response.data.club
            ? response.data.club.id
            : (
                response.data.user.players.length !== 0
                    ? response.data.user.players[0].club_id
                    : null
            );

        window.localStorage.setItem(CLUB_ID, clubId);
    }

    return response;
};

export const removeClubId = () => window.localStorage.removeItem(CLUB_ID);


const JWT = 'jwt';

export const getJwt = () => window.localStorage.getItem(JWT);

export const setJwt = response => {
    if (response.data.jwt) {
        window.localStorage.setItem(JWT, response.data.jwt);
    }

    return response;
};

export const removeJwt = () => window.localStorage.removeItem(JWT);
