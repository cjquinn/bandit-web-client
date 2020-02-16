import { getEmail, getRedirect, getToken } from '../../../store/router/selectors';

describe('selectors', () => {
    it('getEmail', () => {
        const email = 'christy@banditmatch.com';
        let state = {
            router: {
                location: {
                    query: {email: encodeURIComponent(email)}
                }
            }
        };

        expect(getEmail(state)).toEqual(email);

        state = {
            router: {
                location: {
                    query: {}
                }
            }
        };

        expect(getEmail(state)).toBe(null);

        state = {
            router: {
                location: null
            }
        };

        expect(getEmail(state)).toBe(null);
    });

    it('getRedirect', () => {
        const redirect = '/matches/1';
        let state = {
            router: {
                location: {
                    query: {redirect: encodeURIComponent(redirect)}
                }
            }
        };

        expect(getRedirect(state)).toEqual(redirect);

        state = {
            router: {
                location: {
                    query: {}
                }
            }
        };

        expect(getRedirect(state)).toBe(null);

        state = {
            router: {
                location: null
            }
        };

        expect(getRedirect(state)).toBe(null);
    });

    it('getToken', () => {
        const token = '123';
        let state = {
            router: {
                location: {
                    query: {token: encodeURIComponent(token)}
                }
            }
        };

        expect(getToken(state)).toEqual(token);

        state = {
            router: {
                location: {
                    query: {}
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
