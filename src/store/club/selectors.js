import { createSelector } from 'reselect';

// Selectors
import { makeFetchSelectors } from '../shared/selectors';

export const { getDidError, getIds, getIsFetching } = makeFetchSelectors('club');

export const getClubEntity = (state, props) => state.entities.clubs[props.match.params.clubId];

export const getClubEntities = state => state.entities.clubs;

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
