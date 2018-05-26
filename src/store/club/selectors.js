import { createSelector } from 'reselect';

// Selectors
import { getClubEntities } from '../entities/selectors';
import { makeIsFetchingSelector } from '../shared/selectors';
import { getClubId } from '../user/selectors';

// State
const getClubState = state => state.club;

export const getIsFetching = makeIsFetchingSelector(getClubState);

export const getIds = state => getClubState(state).ids;

export const getClub = state => getClubEntities(state)[getClubId(state)];

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
