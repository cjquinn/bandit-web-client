import { get } from 'lodash';

export const makeFetchSelectors = (path = '') => {
    if (path) {
        path += '.';
    }

    const getDidError = state => get(state, `${path}didError`);

    const getIds = state => get(state, `${path}ids`);

    const getIsFetching = state => get(state, `${path}isFetching`);

    return {getDidError, getIds, getIsFetching};
};
