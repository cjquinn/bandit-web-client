// Actions
import { SIGN_OUT } from '../../src/store/User/actions';

// Reducers
import reducers from '../../src/store/reducers';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['form', 'router', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(SIGN_OUT, () => {
        const state = {
            user: {
                id: 1,
                isLoading: true
            }
        };

        const expected = {
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
