import { getUser, getIsAuthenticated, getIsLoading } from '../../../src/store/user/selectors';
import { getClubId } from '../../../src/store/shared/selectors';

describe('selectors', () => {
    it('getClubId', () => {
        const state = {
            user: {clubId: 1}
        };

        expect(getClubId(state)).toEqual(1);
    });

    it('getUser', () => {
        const state = {
            entities: {
                clubs: {1: {id: 1, bandit_id: '1'}},
                players: {1: {id: 1, club_id: 1, level: {name: 'Junior', slug: 'junior'}, wins: 1, losses: 0}},
                users: {1: {id: 1, name: 'Christy', players: [1]}}
            },
            user: {id: 1, clubId: 1}
        };

        expect(getUser(state)).toEqual({
            id: 1,
            name: 'Christy',
            player: {
                id: 1,
                club_id: 1,
                level: {
                    name: 'Junior',
                    slug: 'junior'
                },
                wins: 1,
                losses: 0,
                isBandit: true,
            },
            players: [1]
        });
    });

    it('getIsAuthenticated', () => {
        let state = {
            entities: {
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: null}
        };

        expect(getIsAuthenticated(state)).toBe(false);

        state = {
            entities: {
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: 1}
        };

        expect(getIsAuthenticated(state)).toBe(true);
    });

    it('getIsLoading', () => {
        const state = {user: {isLoading: false}};

        expect(getIsLoading(state)).toBe(false);
    });
});
