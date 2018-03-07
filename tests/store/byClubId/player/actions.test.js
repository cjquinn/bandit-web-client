import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../../src/store/byClubId/player/actions';
import { SIGN_OUT } from '../../../../src/store/user/actions';

const clubId = 1;
const mock = new MockAdapter(axios);
let store;

describe('fetchPlayer', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    const playerId = 1;

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/players/${playerId}.json`)
            .reply(403);

        return store.dispatch(actions.fetchPlayer(clubId, playerId))
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
            .reply(200, {player: {id: 1, rating: 1200}});

        return store.dispatch(actions.fetchPlayer(clubId, playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchPlayerRequest.toString()},
                    {
                        type: actions.fetchPlayerSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, rating: 1200}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchPlayers', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/players.json`)
            .reply(403);

        return store.dispatch(actions.fetchPlayers(clubId))
            .then(() => {
                const expected = [
                    {type: actions.fetchPlayersRequest.toString()},
                    {type: actions.fetchPlayersFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/players.json`)
            .reply(200, {players: [{id: 1, rating: 1200}]});

        return store.dispatch(actions.fetchPlayers(clubId))
            .then(() => {
                const expected = [
                    {type: actions.fetchPlayersRequest.toString()},
                    {
                        type: actions.fetchPlayersSuccess.toString(),
                        payload: {
                            result: [1],
                            entities: {
                                players: {1: {id: 1, rating: 1200}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('invitePlayer', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost(`/clubs/${clubId}/players.json`)
            .reply(403);

        return store.dispatch(actions.invitePlayer(clubId))
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
            .reply(200, {player: {id: 1, rating: 1200}});

        return store.dispatch(actions.invitePlayer(clubId))
            .then(() => {
                const expected = [
                    {type: actions.invitePlayerRequest.toString()},
                    {
                        type: actions.invitePlayerSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                players: {1: {id: 1, rating: 1200}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
