import { createSelector } from 'reselect';

// Api
import { getClubId } from '../api';

// Selectors
import { makeIsFetchingSelector } from '../shared/selectors';

// Normalized
export const getClubEntity = state => state.entities.clubs[getClubId()];

export const getClubEntities = state => state.entities.clubs;

// State
const getClubState = state => state.club;

export const getIsFetching = makeIsFetchingSelector(getClubState);

export const getIds = state => getClubState(state).ids;

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

export const makeGetClub = () => createSelector(
    getClubEntity,
    club => club
);
