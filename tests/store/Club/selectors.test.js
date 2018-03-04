import { getClubs, getIds, getIsFetching, makeGetClub } from '../../../src/store/Club/selectors';

describe('selectors', () => {
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

    it('makeGetClub', () => {
        const state = {
            club: {
                ids: [1]
            },
            entities: {
                clubs: {1: {id: 1, name: 'Bandit'}}
            }
        };

        const props = {match: {params: {clubId: 1}}};

        const getClub = makeGetClub();

        expect(getClub(state, props)).toEqual({id: 1, name: 'Bandit'});
    });
});
