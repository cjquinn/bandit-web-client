import { getToken } from '../../../src/store/router/selectors';

describe('selectors', () => {
    it('getToken', () => {
        const token = '123';
        let state = {
            router: {
                location: {
                    search: `?token=${token}`
                }
            }
        };

        expect(getToken(state)).toEqual(token);

        state = {
            router: {
                location: {
                    search: '?'
                }
            }
        };

        expect(getToken(state)).toBe(null);

        state = {
            router: {
                location: {
                    search: ''
                }
            }
        };

        expect(getToken(state)).toBe(null);

        state = {
            router: {
                location: null
            }
        };

        expect(getToken(state)).toBe(null);
    });
});
