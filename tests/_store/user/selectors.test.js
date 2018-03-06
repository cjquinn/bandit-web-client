import { getCurrentUser, getIsAuthorised, getIsLoading } from '../../../src/store/user/selectors';

describe('selectors', () => {
    it('getCurrentUser', () => {
        let state = {
            entities: {
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: 1}
        };

        expect(getCurrentUser(state)).toEqual({id: 1, name: 'Christy'});
    });

    it('getIsAuthorised', () => {
        let state = {
            entities: {
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: null}
        };

        expect(getIsAuthorised(state)).toBe(false);

        state = {
            entities: {
                users: {1: {id: 1, name: 'Christy'}}
            },
            user: {id: 1}
        };

        expect(getIsAuthorised(state)).toBe(true);
    });

    it('getIsLoading', () => {
        const state = {user: {isLoading: false}};

        expect(getIsLoading(state)).toBe(false);
    });
});
