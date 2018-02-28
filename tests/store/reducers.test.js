// Actions
import { signOut } from '../../src/store/User/actions';

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
    it(signOut.toString(), () => {
        setJwt({data: {jwt: 'JWT_TOKEN'}});

        const state = {
        };

        const expected = {
        };

        const updatedState = reducers(state, signOut());

        // External reducers
        expected.form = updatedState.form;

        expect(reducers(state, signOut())).toEqual(expected);
        expect(getJwt()).toBeNull();
    });
});
