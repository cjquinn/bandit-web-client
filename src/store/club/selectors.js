import { createSelector } from 'reselect';

export const getIds = state => state.club.ids;

export const getIsFetching = state => state.club.isFetching;

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
