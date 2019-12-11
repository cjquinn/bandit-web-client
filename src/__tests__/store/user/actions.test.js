import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'connected-react-router';

// Actions
import * as actions from '../../../store/user/actions';
import { setFlash } from '../../../store/flash/actions';

// Api
import { getClubId, setClubId, getJwt, setJwt } from '../../../store/api';

const mock = new MockAdapter(axios);
let store;

describe('acceptTerms', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('failure', () => {
        mock
            .onPatch('/users/current/accept-terms.json')
            .reply(403);

        return store.dispatch(actions.acceptTerms())
            .then(() => {
                const expected = [
                    {type: actions.acceptTermsRequest.toString()},
                    {type: actions.acceptTermsFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/users/current/accept-terms.json')
            .reply(200, {
                user: {id: 1, players: [{id: 1, club_id: 1}]}
            });

        return store.dispatch(actions.acceptTerms())
            .then(() => {
                const expected = [
                    {type: actions.acceptTermsRequest.toString()},
                    {
                        type: actions.acceptTermsSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, club_id: 1}},
                                users: {1: {id: 1, players: [1]}}
                            }
                        }
                    },
                    push('/')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchCurrentUser', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('failure without JWT', () => {
        store.dispatch(actions.fetchCurrentUser())

        const expected = [
            {type: actions.fetchCurrentUserRequest.toString()},
            {type: actions.fetchCurrentUserFailure.toString()}
        ];

        expect(store.getActions()).toEqual(expected);
    });

    it('failure with JWT', () => {
        setJwt({data: {jwt: 'TOKEN'}});

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
        setJwt({data: {jwt: 'TOKEN'}});

        mock
            .onGet('/users/current.json')
            .reply(200, {
                user: {id: 1, players: [{id: 1, club_id: 1}]},
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
                                players: {1: {id: 1, club_id: 1}},
                                users: {1: {id: 1, players: [1]}}
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

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

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
                    {
                        type: setFlash.toString(),
                        payload: {
                            message: 'Check your email for your reset password link',
                            type: 'info'
                        }
                    },
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
                query: {
                    token: '123'
                }
            }
        }
    }));

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

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

describe('setClubId', () => {
    beforeEach(() => store = global.configureStore());

    it('success', () => {
        const clubId = 1;
        store.dispatch(actions.setClubId(clubId));

        const expected = [actions.setClubId(clubId)];

        expect(store.getActions()).toEqual(expected);
    });
});

describe('signIn', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

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
                user: {id: 1, players: [{id: 1, club_id: 1}]},
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
                                players: {1: {id: 1, club_id: 1}},
                                users: {1: {id: 1, players: [1]}}
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

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('success', () => {
        setJwt({data: {jwt: 'TOKEN'}});
        setClubId({data: {club: {id: 2}}});

        store.dispatch(actions.signOut());

        const expected = [{type: actions.SIGN_OUT}];

        expect(store.getActions()).toEqual(expected);
        expect(getJwt()).toBeNull();
        expect(getClubId()).toBeNull();
    });
});

describe('signUp', () => {
    beforeEach(() => store = global.configureStore());
    
    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('failure', () => {
        mock
            .onPost('/users.json')
            .reply(403);

        return store.dispatch(actions.signUp())
            .then(() => {
                const expected = [
                    {type: actions.signUpRequest.toString()},
                    {type: actions.signUpFailure.toString()},
                    {type: actions.SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/users.json')
            .reply(200, {
                user: {id: 1, players: [{id: 1, club_id: 1}]},
                jwt: 'TOKEN'
            });

        return store.dispatch(actions.signUp())
            .then(() => {
                const expected = [
                    {type: actions.signUpRequest.toString()},
                    {
                        type: actions.signUpSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, club_id: 1}},
                                users: {1: {id: 1, players: [1]}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getClubId()).toEqual(1);
                expect(getJwt()).toEqual('TOKEN');
            });
    });
});

describe('updateSettings', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('failure', () => {
        mock
            .onPut('/users.json')
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
            .onPut('/users.json')
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
                    },
                    {
                        type: setFlash.toString(),
                        payload: {
                            message: 'Your settings were updated',
                            type: 'success'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('validateResetPasswordToken', () => {
    beforeEach(() => store = global.configureStore({
        router: {
            location: {
                query: {
                    token: '123'
                }
            }
        }
    }));

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

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
