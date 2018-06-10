import moment from 'moment';
import { createSelector } from 'reselect';

// Selectors
import { getClubEntities } from '../entities/selectors';
import { getClubId, makeIsFetchingSelector } from '../shared/selectors';

// State
const getClubState = state => state.club;

export const getIsFetching = makeIsFetchingSelector(getClubState);

export const getIds = state => getClubState(state).ids;

export const getClub = state => getClubEntities(state)[getClubId(state)];

// Memoized
export const getClubs = createSelector(
    [getIds, getClubEntities],
    (ids, clubs) => ids
        .map(id => ({
            ...clubs[id],
            last_played_in_days: clubs[id].last_played
                ? moment().diff(moment(clubs[id].last_played), 'days')
                : null
        }))
        .sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            return a.name > b.name ? 1 : 0;
        })
);
