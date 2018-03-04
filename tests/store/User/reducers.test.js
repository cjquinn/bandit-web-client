// Actions
import * as actions from '../../../src/store/User/actions';

// Reducers
import reducers from '../../../src/store/User/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            current: null,
            isLoading: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('activateAccount', () => {
    it(actions.activateAccountSuccess.toString(), () => {
        const state = {
            current: null,
            isLoading: false
        };

        const payload = {id: 1};

        const expected = {
            current: payload,
            isLoading: false
        };

        expect(reducers(state, actions.activateAccountSuccess(payload))).toEqual(expected);
    });
});

describe('fetchCurrentUser', () => {
    it(actions.fetchCurrentUserRequest.toString(), () => {
        const state = {
            current: null,
            isLoading: false
        };

        const expected = {
            current: null,
            isLoading: true
        };

        expect(reducers(state, actions.fetchCurrentUserRequest())).toEqual(expected);
    });

    it(actions.fetchCurrentUserFailure.toString(), () => {
        const state = {
            current: null,
            isLoading: true
        };

        const expected = {
            current: null,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserFailure())).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString(), () => {
        const state = {
            current: null,
            isLoading: true
        };

        const payload = {id: 1};

        const expected = {
            current: payload,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserSuccess(payload))).toEqual(expected);
    });
});

describe('signIn', () => {
    it(actions.signInSuccess.toString(), () => {
        const state = {
            current: null,
            isLoading: false
        };

        const payload = {id: 1};

        const expected = {
            current: payload,
            isLoading: false
        };

        expect(reducers(state, actions.signInSuccess(payload))).toEqual(expected);
    });
});

describe('updateSettings', () => {
    it(actions.updateSettingsSuccess.toString(), () => {
        const state = {
            current: {id: 1, email: 'christy@banditmatch.com'},
            isLoading: false
        };

        const payload = {id: 1, email: 'russell@banditmatch.com'};

        const expected = {
            current: payload,
            isLoading: false
        };

        expect(reducers(state, actions.updateSettingsSuccess(payload))).toEqual(expected);
    });
});
