import { createSelector } from 'reselect';

export const getCurrentUser = state => state.user.current;

export const getIsLoading = state => state.user.isLoading;

export const getIsAuthorised = createSelector(
    [getCurrentUser],
    user => user !== null
);
