import moment from 'moment';

// Selectors
import {
    getClub,
    getClubs,
    getIds,
    getIsFetching } from '../../../store/club/selectors';
import { getBanditId } from '../../../store/shared/selectors';

describe('selectors', () => {
    it('getBanditId', () => {
        const state = {
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash', bandit_id: '4'},
                    2: {id: 2, name: 'Bandit', bandit_id: '3'}
                }
            },
            user: {clubId: 1}
        };

        const expected = 4;

        expect(getBanditId(state)).toEqual(expected);
    });

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
        const twoDaysAgo = moment().subtract(2, 'days').format();

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
