// Api
import { setClubId } from '../../../src/store/api';

// Selectors
import {
    getClub,
    getClubEntities,
    getClubs,
    getIds,
    getIsFetching } from '../../../src/store/club/selectors';

setClubId({data: {club: {id: 1}}});

describe('selectors', () => {
    it('getClub', () => {
        const state = {
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash'},
                    2: {id: 2, name: 'Bandit'}
                }
            }
        };

        const expected = {id: 1, name: 'Squash'};

        expect(getClub(state)).toEqual(expected);
    });

    it('getClubEntities', () => {
        const state = {
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash'},
                    2: {id: 2, name: 'Bandit'}
                }
            }
        };

        const expected = {
            1: {id: 1, name: 'Squash'},
            2: {id: 2, name: 'Bandit'}
        };

        expect(getClubEntities(state)).toEqual(expected);
    });

    it('getClubs', () => {
        const state = {
            club: {
                ids: [1, 2]
            },
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash'},
                    2: {id: 2, name: 'Bandit'}
                }
            }
        };

        const expected = [
            {id: 2, name: 'Bandit'},
            {id: 1, name: 'Squash'}
        ];

        expect(getClubs(state)).toEqual(expected);
    });

    it('getIds', () => {
        const state = {club: {ids: [1, 2, 3]}};

        expect(getIds(state)).toEqual([1, 2, 3]);
    });

    it('getIsFetching', () => {
        const state = {club: {isFetching: false}};

        expect(getIsFetching(state)).toBe(false);
    });
});
