import { createSelector } from 'reselect';

const getRouterState = state => state.router || {};

const getLocation = state => getRouterState(state).location;

const getQueryParams = createSelector(
    getLocation,
    location => {
        if (!location || !location.query) {
            return {};
        }

        return Object
            .keys(location.query)
            .reduce((params, param) => {
                return {[param]: decodeURIComponent(location.query[param])};
            }, {});
    }
);

export const getEmail = createSelector(
    getQueryParams,
    ({ email = null }) => email
);

export const getRedirect = createSelector(
    getQueryParams,
    ({ redirect = null }) => redirect
);

export const getToken = createSelector(
    getQueryParams,
    ({ token = null }) => token
);
