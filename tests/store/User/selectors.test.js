import { getIsAuthorised, getIsLoading } from '../../../src/store/User/selectors';

describe('selectors', () => {
    it('getIsAuthorised', () => {
        let state = {user: {current: null}};

        expect(getIsAuthorised(state)).toBe(false);

        state = {user: {current: {id: 1}}};

        expect(getIsAuthorised(state)).toBe(true);
    });

    it('getIsLoading', () => {
        let state = {user: {isLoading: false}};

        expect(getIsLoading(state)).toBe(false);

        state = {user: {isLoading: true}};

        expect(getIsLoading(state)).toBe(true);
    });
});
