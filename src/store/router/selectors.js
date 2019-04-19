import { createSelector } from 'reselect';

const getRouterState = state => state.router;

const getLocation = state => getRouterState(state).location;

const getQueryParams = location => {
    if (!location || !location.search) {
        return {};
    }

    return location.search
        .slice(1)
        .split('&')
        .reduce((params, param) => {
            const [ key, value ] = param.split('=');
            return {[key]: value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''};
        }, {});
};

export const getEmail = createSelector(
    getLocation,
    location => getQueryParams(location.search).email || null
);

export const getToken = createSelector(
    getLocation,
    location => getQueryParams(location.search).token || null
);
