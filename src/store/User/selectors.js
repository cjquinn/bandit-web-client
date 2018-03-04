import { createSelector } from 'reselect';

export const getIsLoading = state => state.user.isLoading;

export const getIsAuthorised = createSelector(
    state => state.user.current,
    user => user !== null
);
