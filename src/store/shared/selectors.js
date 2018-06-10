import { createSelector } from 'reselect';
import { getClubEntities } from '../entities/selectors';

// Shared user state selectors
export const getClubId = state => state.user.clubId;

// Shared club state selectors
export const getBanditId = createSelector(
    [getClubId, getClubEntities],
    (clubId, clubs) =>
        clubs && clubs[clubId]
            ? +clubs[clubId].bandit_id
            : null
);

// Shared user state selectors
export const getUserId = state => state.user.id;

export const getIsFetching = state => state.isFetching;

export const makeIsFetchingSelector = selector => (state, props) => getIsFetching(selector(state, props));
