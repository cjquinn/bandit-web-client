import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'react-router-redux';

// Actions
import * as actions from '../../../src/store/user/actions';

// Api
import { getJwt, setJwt } from '../../../src/store/api';

const mock = new MockAdapter(axios);
let store;

describe('activateAccount', () => {
    beforeEach(() => store = global.configureStore({
        router: {
            location: {
                search: '?token=123'
            }
        }
    }));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/users/activate-account.json?token=123')
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
            .onPatch('/users/activate-account.json?token=123')
            .reply(200, {
                user: {id: 1},
                jwt: 'TOKEN'
            });

        return store.dispatch(actions.activateAccount())
            .then(() => {
                const expected = [
                    {type: actions.activateAccountRequest.toString()},
                    {
                        type: actions.activateAccountSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                users: {1: {id: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getJwt()).toEqual('TOKEN');
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
                user: {id: 1}
            });

        return store.dispatch(actions.fetchCurrentUser())
            .then(() => {
                const expected = [
                    {type: actions.fetchCurrentUserRequest.toString()},
                    {
                        type: actions.fetchCurrentUserSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                users: {1: {id: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('requestPasswordReset', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/users/request-password-reset.json')
            .reply(403);

        return store.dispatch(actions.requestPasswordReset())
            .then(() => {
                const expected = [
                    {type: actions.requestPasswordResetRequest.toString()},
                    {type: actions.requestPasswordResetFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/users/request-password-reset.json')
            .reply(200);

        return store.dispatch(actions.requestPasswordReset())
            .then(() => {
                const expected = [
                    {type: actions.requestPasswordResetRequest.toString()},
                    {type: actions.requestPasswordResetSuccess.toString()},
                    push('/sign-in')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('resetPassword', () => {
    beforeEach(() => store = global.configureStore({
        router: {
            location: {
                search: '?token=123'
            }
        }
    }));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/users/reset-password.json?token=123')
            .reply(403);

        return store.dispatch(actions.resetPassword())
            .then(() => {
                const expected = [
                    {type: actions.resetPasswordRequest.toString()},
                    {type: actions.resetPasswordFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/users/reset-password.json?token=123')
            .reply(200);

        return store.dispatch(actions.resetPassword())
            .then(() => {
                const expected = [
                    {type: actions.resetPasswordRequest.toString()},
                    {type: actions.resetPasswordSuccess.toString()},
                    push('/sign-in')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('signIn', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/users/login.json')
            .reply(403);

        return store.dispatch(actions.signIn())
            .then(() => {
                const expected = [
                    {type: actions.signInRequest.toString()},
                    {type: actions.signInFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/users/login.json')
            .reply(200, {
                user: {id: 1},
                jwt: 'TOKEN'
            });

        return store.dispatch(actions.signIn())
            .then(() => {
                const expected = [
                    {type: actions.signInRequest.toString()},
                    {
                        type: actions.signInSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                users: {1: {id: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getJwt()).toEqual('TOKEN');
            });
    });
});

describe('signOut', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('success', () => {
        setJwt({data: {jwt: 'TOKEN'}});

        store.dispatch(actions.signOut());

        const expected = [{type: actions.SIGN_OUT}];

        expect(store.getActions()).toEqual(expected);
        expect(getJwt()).toBeNull();
    });
});

describe('updateSettings', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPut('/users/update-settings.json')
            .reply(403);

        return store.dispatch(actions.updateSettings())
            .then(() => {
                const expected = [
                    {type: actions.updateSettingsRequest.toString()},
                    {type: actions.updateSettingsFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPut('/users/update-settings.json')
            .reply(200, {
                user: {id: 1}
            });

        return store.dispatch(actions.updateSettings())
            .then(() => {
                const expected = [
                    {type: actions.updateSettingsRequest.toString()},
                    {
                        type: actions.updateSettingsSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                users: {1: {id: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('validateActivateAccountToken', () => {
    beforeEach(() => store = global.configureStore({
        router: {
            location: {
                search: '?token=123'
            }
        }
    }));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/users/activate-account.json?token=123')
            .reply(403);

        return store.dispatch(actions.validateActivateAccountToken())
            .then(() => {
                const expected = [
                    {type: actions.validateActivateAccountTokenRequest.toString()},
                    {type: actions.validateActivateAccountTokenFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/users/activate-account.json?token=123')
            .reply(200);

        return store.dispatch(actions.validateActivateAccountToken())
            .then(() => {
                const expected = [
                    {type: actions.validateActivateAccountTokenRequest.toString()},
                    {type: actions.validateActivateAccountTokenSuccess.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('validateResetPasswordToken', () => {
    beforeEach(() => store = global.configureStore({
        router: {
            location: {
                search: '?token=123'
            }
        }
    }));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/users/reset-password.json?token=123')
            .reply(403);

        return store.dispatch(actions.validateResetPasswordToken())
            .then(() => {
                const expected = [
                    {type: actions.validateResetPasswordTokenRequest.toString()},
                    {type: actions.validateResetPasswordTokenFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/users/reset-password.json?token=123')
            .reply(200);

        return store.dispatch(actions.validateResetPasswordToken())
            .then(() => {
                const expected = [
                    {type: actions.validateResetPasswordTokenRequest.toString()},
                    {type: actions.validateResetPasswordTokenSuccess.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
