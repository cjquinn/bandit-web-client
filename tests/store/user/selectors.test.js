import { getClubId, getUser, getIsAuthenticated, getIsLoading } from '../../../src/store/user/selectors';

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
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: 1}
        };

        expect(getUser(state)).toEqual({id: 1, name: 'Christy'});
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
