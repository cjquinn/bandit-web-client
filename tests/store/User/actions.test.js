import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('activateAccount', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/users/activate-account.json')
            .reply(403);

        return store.dispatch(actions.activateAccount())
            .then(() => {
                const expected = [
                    {type: actions.activateAccountRequest.toString()},
                    {type: actions.activateAccountFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/users/activate-account.json')
            .reply(200, {
                user: {id: 1, email: 'christy@banditmatch.com'}
            });

        return store.dispatch(actions.activateAccount())
            .then(() => {
                const expected = [
                    {type: actions.activateAccountRequest.toString()},
                    {
                        type: actions.activateAccountSuccess.toString(),
                        payload: {
                            id: 1,
                            email: 'christy@banditmatch.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});


describe('fetchCurrentUser', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/users/current.json')
            .reply(403);

        return store.dispatch(actions.fetchCurrentUser())
            .then(() => {
                const expected = [
                    {type: actions.fetchCurrentUserRequest.toString()},
                    {type: actions.fetchCurrentUserFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/users/current.json')
            .reply(200, {
                user: {id: 1, email: 'christy@banditmatch.com'}
            });

        return store.dispatch(actions.fetchCurrentUser())
            .then(() => {
                const expected = [
                    {type: actions.fetchCurrentUserRequest.toString()},
                    {
                        type: actions.fetchCurrentUserSuccess.toString(),
                        payload: {
                            id: 1,
                            email: 'christy@banditmatch.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
