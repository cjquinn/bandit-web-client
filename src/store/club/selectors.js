import { createSelector } from 'reselect';

// Selectors
import { makeIsFetchingSelector } from '../shared/selectors';
import { getClubId } from '../user/selectors';

// Normalized
export const getClubEntities = state => state.entities.clubs;

// State
const getClubState = state => state.club;

export const getIsFetching = makeIsFetchingSelector(getClubState);

export const getIds = state => getClubState(state).ids;

export const getClub = state => state.entities.clubs[getClubId(state)];

// Memoized
export const getClubs = createSelector(
    [getIds, getClubEntities],
    (ids, clubs) => ids
        .map(id => clubs[id])
        .sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            return a.name > b.name ? 1 : 0;
        })
);
