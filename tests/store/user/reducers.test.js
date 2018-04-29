// Actions
import { createClubSuccess } from '../../../src/store/club/actions';
import * as actions from '../../../src/store/user/actions';

// Reducers
import reducers from '../../../src/store/user/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            id: null,
            isLoading: true
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('activateAccount', () => {
    it(actions.activateAccountSuccess.toString(), () => {
        const state = {
            id: null,
            isLoading: false
        };

        const payload = {result: 1};

        const expected = {
            id: payload.result,
            isLoading: false
        };

        expect(reducers(state, actions.activateAccountSuccess(payload))).toEqual(expected);
    });
});

describe('createClub', () => {
    it(createClubSuccess.toString(), () => {
        const state = {
            id: null,
            isLoading: false
        };

        const payload = {
            result: 1,
            entities: {
                clubs: {
                    1: {founder_id: 1}
                }
            }
        };

        const expected = {
            id: 1,
            isLoading: false
        };

        expect(reducers(state, createClubSuccess(payload))).toEqual(expected);
    });
});

describe('fetchCurrentUser', () => {
    it(actions.fetchCurrentUserRequest.toString(), () => {
        const state = {
            id: null,
            isLoading: false
        };

        const expected = {
            id: null,
            isLoading: true
        };

        expect(reducers(state, actions.fetchCurrentUserRequest())).toEqual(expected);
    });

    it(actions.fetchCurrentUserFailure.toString(), () => {
        const state = {
            id: null,
            isLoading: true
        };

        const expected = {
            id: null,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserFailure())).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString(), () => {
        const state = {
            id: null,
            isLoading: true
        };

        const payload = {result: 1};

        const expected = {
            id: payload.result,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserSuccess(payload))).toEqual(expected);
    });
});

describe('signIn', () => {
    it(actions.signInSuccess.toString(), () => {
        const state = {
            id: null,
            isLoading: false
        };

        const payload = {result: 1};

        const expected = {
            id: payload.result,
            isLoading: false
        };

        expect(reducers(state, actions.signInSuccess(payload))).toEqual(expected);
    });
});
