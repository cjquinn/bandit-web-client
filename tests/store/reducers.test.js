// Actions
import { SIGN_OUT } from '../../src/store/User/actions';

// Api
import { getJwt, setJwt } from '../../src/store/api';

// Reducers
import reducers from '../../src/store/reducers';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['form'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(SIGN_OUT, () => {
        const state = {
        };

        const expected = {
        };

        const updatedState = reducers(state, {type: SIGN_OUT});

        // External reducers
        expected.form = updatedState.form;

        expect(updatedState).toEqual(expected);
    });
});
