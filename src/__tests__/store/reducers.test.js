// Actions
import { SIGN_OUT } from '../../store/user/actions';

// Reducers
import { history } from '../../store/configureStore';
import createRootReducer from '../../store/reducers';

const reducers = createRootReducer(history);

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['byClubId', 'club', 'flash', 'form', 'entities', 'router', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(SIGN_OUT, () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        ids: [1, 2, 3],
                        isFetching: true,
                        page: 2
                    },
                    player: {
                        ids: [1, 2, 3],
                        isFetching: true,
                        orderBy: 'a-z'
                    }
                }
            },
            club: {
                ids: [1],
                isFetching: true
            },
            flash: {
                message: 'Some message',
                type: 'success'
            },
            entities: {
                challenges: {1: {id: 1}},
                clubs: {1: {id: 1}},
                disputes: {1: {id: 1}},
                matches: {1: {id: 1}},
                players: {1: {id: 1}},
                users: {1: {id: 1}}
            },
            user: {
                clubId: 1,
                id: 1,
                isLoading: true
            }
        };

        const expected = {
            byClubId: {},
            club: {
                ids: [],
                isFetching: false
            },
            flash: {
                message: null,
                type: null
            },
            entities: {
                challenges: {},
                clubs: {},
                disputes: {},
                matches: {},
                players: {},
                users: {}
            },
            user: {
                clubId: null,
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
