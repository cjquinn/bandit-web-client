import moment from 'moment';

// Selectors
import {
    getClub,
    getClubs,
    getIds,
    getIsFetching } from '../../../src/store/club/selectors';

describe('selectors', () => {
    it('getClub', () => {
        const state = {
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash'},
                    2: {id: 2, name: 'Bandit'}
                }
            },
            user: {clubId: 1}
        };

        const expected = {id: 1, name: 'Squash'};

        expect(getClub(state)).toEqual(expected);
    });

    it('getClubs', () => {
        const now = moment();
        const twoDaysAgo = now.day(-2).format();

        const state = {
            club: {
                ids: [1, 2]
            },
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash', last_played: twoDaysAgo},
                    2: {id: 2, name: 'Bandit', last_played: null}
                }
            }
        };

        const expected = [
            {id: 2, name: 'Bandit', last_played: null, last_played_in_days: null},
            {id: 1, name: 'Squash', last_played: twoDaysAgo, last_played_in_days: 2}
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
