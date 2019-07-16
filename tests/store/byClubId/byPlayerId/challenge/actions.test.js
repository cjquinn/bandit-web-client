import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'react-router-redux';

// Actions
import * as actions from '../../../../../src/store/byClubId/byPlayerId/challenge/actions';
import { setFlash } from '../../../../../src/store/flash/actions';
import { SIGN_OUT } from '../../../../../src/store/user/actions';

const clubId = 1;
const mock = new MockAdapter(axios);
let store;

describe('acceptChallenge', () => {
    const challengeId = 1;

    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/accept.json`)
            .reply(403);

        return store.dispatch(actions.acceptChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.acceptChallengeRequest.toString()},
                    {type: actions.acceptChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/accept.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: 2}
            });

        return store.dispatch(actions.acceptChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.acceptChallengeRequest.toString()},
                    {
                        type: actions.acceptChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: 2, player_b_id: 2}
                                }
                            },
                            clubId,
                            playerId: ['all', 1, 2]
                        }
                    },
                    setFlash({message: 'You have accepted the challenge', type: 'info'})
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('createChallenge', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost(`/clubs/${clubId}/challenges.json`)
            .reply(403);

        return store.dispatch(actions.createChallenge())
            .then(() => {
                const expected = [
                    {type: actions.createChallengeRequest.toString()},
                    {type: actions.createChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost(`/clubs/${clubId}/challenges.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: null}
            });

        return store.dispatch(actions.createChallenge())
            .then(() => {
                const expected = [
                    {type: actions.createChallengeRequest.toString()},
                    {
                        type: actions.createChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: null, player_b_id: null}
                                }
                            },
                            clubId,
                            playerId: ['all', 1]
                        }
                    },
                    push('/challenges/1')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('deleteChallenge', () => {
    const challengeId = 1;

    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onDelete(`/clubs/${clubId}/challenges/${challengeId}.json`)
            .reply(403);

        return store.dispatch(actions.deleteChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.deleteChallengeRequest.toString()},
                    {type: actions.deleteChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onDelete(`/clubs/${clubId}/challenges/${challengeId}.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: 2}
            });

        return store.dispatch(actions.deleteChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.deleteChallengeRequest.toString()},
                    {
                        type: actions.deleteChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: 2, player_b_id: 2}
                                }
                            },
                            clubId,
                            playerId: ['all', 1, 2]
                        }
                    },
                    setFlash({message: 'Your challenge was deleted', type: 'info'}),
                    push('/challenges')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchChallenge', () => {
    const challengeId = 1;

    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/challenges/${challengeId}.json`)
            .reply(403);

        return store.dispatch(actions.fetchChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.fetchChallengeRequest.toString()},
                    {type: actions.fetchChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/challenges/${challengeId}.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: 2}
            });

        return store.dispatch(actions.fetchChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.fetchChallengeRequest.toString()},
                    {
                        type: actions.fetchChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: 2, player_b_id: 2}
                                }
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchChallenges', () => {
    const playerId = 'all';
    const filter = 'open';

    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/challenges.json?player_id=${playerId}&filter=${filter}`)
            .reply(403);

        return store.dispatch(actions.fetchChallenges(playerId, filter))
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchChallengesRequest.toString(),
                        payload: {clubId, playerId, filter}
                    },
                    {
                        type: actions.fetchChallengesFailure.toString(),
                        payload: {clubId, playerId, filter}
                    },
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/challenges.json?player_id=${playerId}&filter=${filter}`)
            .reply(200, {
                challenges: [{id: 1, player_a_id: 1, player_b_id: 2}]
            });

        return store.dispatch(actions.fetchChallenges(playerId, filter))
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchChallengesRequest.toString(),
                        payload: {clubId, playerId, filter}
                    },
                    {
                        type: actions.fetchChallengesSuccess.toString(),
                        payload: {
                            result: [1],
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: 2, player_b_id: 2}
                                }
                            },
                            clubId,
                            playerId,
                            filter
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('reportChallenge', () => {
    const challengeId = 1;

    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/report.json`)
            .reply(403);

        return store.dispatch(actions.reportChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.reportChallengeRequest.toString()},
                    {type: actions.reportChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/report.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: 2}
            });

        return store.dispatch(actions.reportChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.reportChallengeRequest.toString()},
                    {
                        type: actions.reportChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: 2, player_b_id: 2}
                                }
                            },
                            clubId,
                            playerId: ['all', 1, 2]
                        }
                    },
                    setFlash({message: 'Your opponent has been reported', type: 'info'}),
                    push('/challenges')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('withdrawChallenge', () => {
    const challengeId = 1;

    beforeEach(() => store = global.configureStore({
        user: {
            id: 1,
            clubId
        },
        entities: {
            users: {
                1: {id: 1, players: [2]}
            },
            players: {
                2: {
                    id: 2,
                    club_id: clubId
                }
            }
        }
    }));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/withdraw.json`)
            .reply(403);

        return store.dispatch(actions.withdrawChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.withdrawChallengeRequest.toString()},
                    {type: actions.withdrawChallengeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch(`/clubs/${clubId}/challenges/${challengeId}/withdraw.json`)
            .reply(200, {
                challenge: {id: 1, player_a_id: 1, player_b_id: null}
            });

        return store.dispatch(actions.withdrawChallenge(challengeId))
            .then(() => {
                const expected = [
                    {type: actions.withdrawChallengeRequest.toString()},
                    {
                        type: actions.withdrawChallengeSuccess.toString(),
                        payload: {
                            result: 1,
                            entities: {
                                challenges: {
                                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: null, player_b_id: null}
                                }
                            },
                            clubId,
                            playerId: ['all', 1, 2]
                        }
                    },
                    setFlash({message: 'You have withdrawn from the challenge', type: 'info'}),
                    push('/challenges')
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
