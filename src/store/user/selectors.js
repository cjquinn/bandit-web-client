import { createSelector } from 'reselect';

export const getId = state => state.user.id;

export const getIsLoading = state => state.user.isLoading;

export const getUserEntities = state => state.entities.users;

export const getUser = createSelector(
    [getId, getUserEntities],
    (id, users) => users[id]
);

export const getIsAuthenticated = createSelector(
    [getId],
    id => id !== null
);
