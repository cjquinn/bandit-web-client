import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'connected-react-router';

// Actions
import * as actions from '../../../../store/byClubId/player/actions';
import { setFlash } from '../../../../store/flash/actions';
import { SIGN_OUT } from '../../../../store/user/actions';

const clubId = 1;
const mock = new MockAdapter(axios);
let store;

describe('fetchPlayer', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const playerId = 1;

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/players/${playerId}.json`)
            .reply(403);

        return store.dispatch(actions.fetchPlayer(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchPlayerRequest.toString()},
                    {type: actions.fetchPlayerFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/players/${playerId}.json`)
            .reply(200, {player: {id: 1, rating: 1200, user_id: 1}});

        return store.dispatch(actions.fetchPlayer(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchPlayerRequest.toString()},
                    {
                        type: actions.fetchPlayerSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, rating: 1200, user_id: 1, user: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchPlayers', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/players.json`)
            .reply(403);

        return store.dispatch(actions.fetchPlayers())
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchPlayersRequest.toString(),
                        payload: {clubId}
                    },
                    {type: actions.fetchPlayersFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/players.json`)
            .reply(200, {players: [{id: 1, rating: 1200, user_id: 1}]});

        return store.dispatch(actions.fetchPlayers())
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchPlayersRequest.toString(),
                        payload: {clubId}
                    },
                    {
                        type: actions.fetchPlayersSuccess.toString(),
                        payload: {
                            clubId,
                            result: [1],
                            entities: {
                                players: {1: {id: 1, rating: 1200, user_id: 1, user: 1}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('invitePlayer', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost(`/clubs/${clubId}/players.json`)
            .reply(403);

        return store.dispatch(actions.invitePlayer())
            .then(() => {
                const expected = [
                    {type: actions.invitePlayerRequest.toString()},
                    {type: actions.invitePlayerFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost(`/clubs/${clubId}/players.json`)
            .reply(200, {player: {id: 1, rating: 1200, user_id: 1}});

        return store.dispatch(actions.invitePlayer())
            .then(() => {
                const expected = [
                    {type: actions.invitePlayerRequest.toString()},
                    {
                        type: actions.invitePlayerSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, rating: 1200, user_id: 1, user: 1}}
                            }
                        }
                    },
                    {
                        type: setFlash.toString(),
                        payload: {
                            message: 'Invite sent',
                            type: 'success'
                        }
                    },
                    push('/players')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
