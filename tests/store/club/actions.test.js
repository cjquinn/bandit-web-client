import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'react-router-redux';

// Actions
import * as actions from '../../../src/store/club/actions';
import { SIGN_OUT } from '../../../src/store/user/actions';

// Api
import { getClubId, getJwt } from '../../../src/store/api';

const mock = new MockAdapter(axios);
let store;

describe('createClub', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => {
        mock.reset();
        global.localStorage.clear();
    });

    it('failure', () => {
        mock
            .onPost('/clubs.json')
            .reply(403);

        return store.dispatch(actions.createClub())
            .then(() => {
                const expected = [
                    {type: actions.createClubRequest.toString()},
                    {type: actions.createClubFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('unauthorised success', () => {
        mock
            .onPost('/clubs.json')
            .reply(200, {
                club: {id: 1, name: 'Bandit'},
                jwt: 'TOKEN'
            });

        return store.dispatch(actions.createClub())
            .then(() => {
                const expected = [
                    {type: actions.createClubRequest.toString()},
                    {
                        type: actions.createClubSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                clubs: {1: {id: 1, name: 'Bandit'}}
                            }
                        }
                    },
                    push('/')
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getClubId()).toEqual(1);
                expect(getJwt()).toEqual('TOKEN');
            });
    });
});

describe('fetchClub', () => {
    beforeEach(() => store = global.configureStore({user: {clubId: 1}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/clubs/1.json')
            .reply(403);

        return store.dispatch(actions.fetchClub())
            .then(() => {
                const expected = [
                    {type: actions.fetchClubRequest.toString()},
                    {type: actions.fetchClubFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/clubs/1.json')
            .reply(200, {
                club: {id: 1, name: 'Bandit'}
            });

        return store.dispatch(actions.fetchClub())
            .then(() => {
                const expected = [
                    {type: actions.fetchClubRequest.toString()},
                    {
                        type: actions.fetchClubSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                clubs: {1: {id: 1, name: 'Bandit'}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('no clubId', () => {
        store = global.configureStore({user: {}});

        store.dispatch(actions.fetchClub());

        const expected = [push('/clubs')];

        expect(store.getActions()).toEqual(expected);
    });
});

describe('fetchClubs', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/clubs.json')
            .reply(403);

        return store.dispatch(actions.fetchClubs())
            .then(() => {
                const expected = [
                    {type: actions.fetchClubsRequest.toString()},
                    {type: actions.fetchClubsFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/clubs.json')
            .reply(200, {
                clubs: [{id: 1, name: 'Bandit'}]
            });

        return store.dispatch(actions.fetchClubs())
            .then(() => {
                const expected = [
                    {type: actions.fetchClubsRequest.toString()},
                    {
                        type: actions.fetchClubsSuccess.toString(),
                        payload: {
                            result: [1],
                            entities: {
                                clubs: {1: {id: 1, name: 'Bandit'}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('updateClub', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPut('/clubs/1.json')
            .reply(403);

        return store.dispatch(actions.updateClub(1))
            .then(() => {
                const expected = [
                    {type: actions.updateClubRequest.toString()},
                    {type: actions.updateClubFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPut('/clubs/1.json')
            .reply(200, {
                club: {id: 1, name: 'Bandit'}
            });

        return store.dispatch(actions.updateClub(1))
            .then(() => {
                const expected = [
                    {type: actions.updateClubRequest.toString()},
                    {
                        type: actions.updateClubSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                clubs: {1: {id: 1, name: 'Bandit'}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
