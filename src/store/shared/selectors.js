import { get } from 'lodash';

export const getDidError = state => state.didError;

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const makeFetchSelectors = (path = '') => {
    const getState = state => path !== ''
        ? get(state, path)
        : state;

    return {
        getDidError: state => getDidError(getState(state)),
        getIds: state => getIds(getState(state)),
        getIsFetching: state => getIsFetching(getState(state)),
    };
};
