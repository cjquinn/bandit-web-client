import { createSelector } from 'reselect';

const getRouterState = state => state.router;

const getLocation = state => getRouterState(state).location;

export const getToken = createSelector(
    getLocation,
    location => {
        if (!location || !location.search) {
            return null;
        }

        const queryParams = location.search
            .slice(1)
            .split('&')
            .reduce((params, param) => {
                const [ key, value ] = param.split('=');
                return {[key]: value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''};
            }, {});

        return queryParams.token || null;
    }
);
