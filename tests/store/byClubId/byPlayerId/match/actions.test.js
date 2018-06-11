import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'react-router-redux';

// Actions
import * as actions from '../../../../../src/store/byClubId/byPlayerId/match/actions';
import { SIGN_OUT } from '../../../../../src/store/user/actions';

const clubId = 1;
const mock = new MockAdapter(axios);
let store;

describe('addMatch', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost(`/clubs/${clubId}/matches.json`)
            .reply(403);

        return store.dispatch(actions.addMatch())
            .then(() => {
                const expected = [
                    {type: actions.addMatchRequest.toString()},
                    {type: actions.addMatchFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost(`/clubs/${clubId}/matches.json`)
            .reply(200, {
                club: {id: 1},
                match: {id: 1, player_a_id: 1, player_b_id: 2}
            });

        return store.dispatch(actions.addMatch())
            .then(() => {
                const expected = [
                    {type: actions.addMatchRequest.toString()},
                    {
                        type: actions.addMatchSuccess.toString(),
                        payload: {
                            clubId,
                            result: 1,
                            entities: {
                                clubs: {1: {id: 1}},
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            }
                        }
                    },
                    push('/matches')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('deleteMatch', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const matchId = 2;

    it('failure', () => {
        mock
            .onDelete(`/clubs/${clubId}/matches/${matchId}.json`)
            .reply(403);

        return store.dispatch(actions.deleteMatch(matchId))
            .then(() => {
                const expected = [
                    {type: actions.deleteMatchRequest.toString()},
                    {type: actions.deleteMatchFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onDelete(`/clubs/${clubId}/matches/${matchId}.json`)
            .reply(200, {
                club: {id: 1},
                matches: [{id: 1, player_a_id: 1, player_b_id: 2}]
            });

        return store.dispatch(actions.deleteMatch(matchId))
            .then(() => {
                const expected = [
                    {type: actions.deleteMatchRequest.toString()},
                    {
                        type: actions.deleteMatchSuccess.toString(),
                        payload: {
                            clubId,
                            matchId,
                            result: [1],
                            entities: {
                                clubs: {1: {id: 1}},
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchMatch', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const matchId = 2;

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/matches/${matchId}.json`)
            .reply(403);

        return store.dispatch(actions.fetchMatch( matchId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchRequest.toString()},
                    {type: actions.fetchMatchFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/matches/${matchId}.json`)
            .reply(200, {match: {id: 1, player_a_id: 1, player_b_id: 2}});

        return store.dispatch(actions.fetchMatch(matchId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchRequest.toString()},
                    {
                        type: actions.fetchMatchSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchMatches', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const playerId = 'all';
    const page = 1;

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/matches.json?page=${page}&player_id=${playerId}`)
            .reply(403);

        return store.dispatch(actions.fetchMatches(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchesRequest.toString()},
                    {type: actions.fetchMatchesFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/matches.json?page=${page}&player_id=${playerId}`)
            .reply(200, {matches: [{id: 1, player_a_id: 1, player_b_id: 2}]});

        return store.dispatch(actions.fetchMatches(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchesRequest.toString()},
                    {
                        type: actions.fetchMatchesSuccess.toString(),
                        payload: {
                            clubId,
                            page,
                            playerId,
                            result: [1],
                            entities: {
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchMoreMatches', () => {
    beforeEach(() => store = global.configureStore({
        byClubId: {
            1: {
                byPlayerId: {
                    'all': {
                        match: {
                            page: 1
                        }
                    }
                }
            }
        },
        user: {clubId}
    }));

    afterEach(() => mock.reset());

    const page = 2;
    const playerId = 'all';

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/matches.json?page=${page}&player_id=${playerId}`)
            .reply(403);

        return store.dispatch(actions.fetchMoreMatches(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchesRequest.toString()},
                    {type: actions.fetchMatchesFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/matches.json?page=${page}&player_id=${playerId}`)
            .reply(200, {
                matches: [{id: 1, player_a_id: 1, player_b_id: 2}],
                total: 2
            });

        return store.dispatch(actions.fetchMoreMatches(playerId))
            .then(() => {
                const expected = [
                    {type: actions.fetchMatchesRequest.toString()},
                    {
                        type: actions.fetchMatchesSuccess.toString(),
                        payload: {
                            clubId,
                            page,
                            playerId,
                            result: [1],
                            entities: {
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            },
                            total: 2
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
