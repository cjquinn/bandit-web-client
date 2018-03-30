export const getIsFetching = state => state.isFetching;

export const makeIsFetchingSelector = selector => (state, props) => getIsFetching(selector(state, props));
