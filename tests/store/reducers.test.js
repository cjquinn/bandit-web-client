// Actions
import { SIGN_OUT } from '../../src/store/user/actions';

// Reducers
import reducers from '../../src/store/reducers';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['byClubId', 'club', 'form', 'entities', 'router', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(SIGN_OUT, () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: true,
                        ids: [1, 2, 3],
                        isFetching: true,
                        page: 2
                    },
                    player: {
                        didError: true,
                        ids: [1, 2, 3],
                        isFetching: true,
                        orderBy: 'a-z'
                    }
                }
            },
            club: {
                didError: true,
                ids: [1],
                isFetching: true
            },
            entities: {
                clubs: {1: {id: 1}},
                disputes: {1: {id: 1}},
                matches: {1: {id: 1}},
                players: {1: {id: 1}},
                snapshots: {1: {id: 1}},
                users: {1: {id: 1}}
            },
            user: {
                id: 1,
                isLoading: true
            }
        };

        const expected = {
            byClubId: {},
            club: {
                didError: false,
                ids: [],
                isFetching: false
            },
            entities: {
                clubs: {},
                disputes: {},
                matches: {},
                players: {},
                snapshots: {},
                users: {}
            },
            user: {
                id: null,
                isLoading: false
            }
        };

        const updatedState = reducers(state, {type: SIGN_OUT});

        // External reducers
        expected.form = updatedState.form;
        expected.router = updatedState.router;

        expect(updatedState).toEqual(expected);
    });
});
