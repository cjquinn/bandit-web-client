export const getDidError = state => state.didError;

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const makeFetchSelectors = selector => ({
    getDidError: (state, props) => getDidError(selector(state, props)),
    getIds: (state, props) => getIds(selector(state, props)),
    getIsFetching: (state, props) => getIsFetching(selector(state, props))
});
