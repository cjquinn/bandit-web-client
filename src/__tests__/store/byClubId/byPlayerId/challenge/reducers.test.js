// Actions
import * as actions from '../../../../../store/byClubId/byPlayerId/challenge/actions';
import { addMatchSuccess } from '../../../../../store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../../store/byClubId/byPlayerId/challenge/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('acceptChallenge', () => {
    it(actions.acceptChallengeSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1],
                isFetching: false
            }
        };

        const payload = {
            result: 1
        };

        const expected = {
            accepted: {
                ids: [2, 1],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.acceptChallengeSuccess(payload))).toEqual(expected);
    });
});

describe('addMatch', () => {
    it(addMatchSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1],
                isFetching: false
            }
        };

        const payload = {
            entities: {
                matches: {3: {challenge: {id: 2}}}
            },
            result: 3
        };

        const expected = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1],
                isFetching: false
            }
        };

        expect(reducers(state, addMatchSuccess(payload))).toEqual(expected);
    });
});

describe('createChallenge', () => {
    it(actions.createChallengeSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1],
                isFetching: false
            }
        };

        const payload = {
            result: 2
        };

        const expected = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1, 2],
                isFetching: false
            }
        };

        expect(reducers(state, actions.createChallengeSuccess(payload))).toEqual(expected);
    });
});

describe('deleteChallenge', () => {
    it(actions.deleteChallengeSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [1, 2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1, 2],
                isFetching: false
            }
        };

        const payload = {
            result: 1
        };

        const expected = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [2],
                isFetching: false
            }
        };

        expect(reducers(state, actions.deleteChallengeSuccess(payload))).toEqual(expected);
    });
});

describe('fetchChallenges', () => {
    it(actions.fetchChallengesRequest.toString(), () => {
        const state = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            filter: 'accepted'
        };

        const expected = {
            accepted: {
                ids: [],
                isFetching: true
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.fetchChallengesRequest(payload))).toEqual(expected);
    });

    it(actions.fetchChallengesFailure.toString(), () => {
        const state = {
            accepted: {
                ids: [],
                isFetching: true
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: true
            }
        };

        const payload = {
            filter: 'accepted'
        };

        const expected = {
            accepted: {
                ids: [],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: true
            }
        };

        expect(reducers(state, actions.fetchChallengesFailure(payload))).toEqual(expected);
    });

    it(actions.fetchChallengesSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [],
                isFetching: true
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            result: [1],
            filter: 'accepted'
        };

        const expected = {
            accepted: {
                ids: [1],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.fetchChallengesSuccess(payload))).toEqual(expected);
    });
});

describe('reportChallenge', () => {
    it(actions.reportChallengeSuccess.toString(), () => {
        const state = {
            accepted: {
                ids: [1, 2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            result: 1
        };

        const expected = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.reportChallengeSuccess(payload))).toEqual(expected);
    });
});

describe('withdrawChallenge', () => {
    it(`${actions.withdrawChallengeSuccess.toString()} player_a`, () => {
        const state = {
            accepted: {
                ids: [1, 2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            result: 1,
            entities: {
                challenges: {
                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: null, player_b_id: null}
                }
            },
            playerId: 1,
        };

        const expected = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [1],
                isFetching: false
            }
        };

        expect(reducers(state, actions.withdrawChallengeSuccess(payload))).toEqual(expected);
    });

    it(`${actions.withdrawChallengeSuccess.toString()} player_b`, () => {
        const state = {
            accepted: {
                ids: [1, 2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            result: 1,
            entities: {
                challenges: {
                    1: {id: 1, player_a: 1, player_a_id: 1, player_b: null, player_b_id: null}
                }
            },
            playerId: 2,
        };

        const expected = {
            accepted: {
                ids: [2],
                isFetching: false
            },
            all: {
                ids: [],
                isFetching: false
            },
            open: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.withdrawChallengeSuccess(payload))).toEqual(expected);
    });
});
