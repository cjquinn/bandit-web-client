// Actions
import * as actions from '../../../../store/byClubId/leaderboard/actions';

// Reducers
import reducers from '../../../../store/byClubId/leaderboard/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            allTime: {
                ids: [],
                isFetching: false
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchLeaderboard', () => {
    const payload = {period: 'allTime'};
    
    it(actions.fetchLeaderboardRequest.toString(), () => {
        const state = {
            allTime: {
                ids: [],
                isFetching: false
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        const expected = {
            allTime: {
                ids: [],
                isFetching: true
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.fetchLeaderboardRequest(payload))).toEqual(expected);
    });

    it(actions.fetchLeaderboardFailure.toString(), () => {
        const state = {
            allTime: {
                ids: [],
                isFetching: true
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        const expected = {
            allTime: {
                ids: [],
                isFetching: false
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.fetchLeaderboardFailure(payload))).toEqual(expected);
    });

    it(actions.fetchLeaderboardSuccess.toString(), () => {
        const state = {
            allTime: {
                ids: [],
                isFetching: true
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        const payload = {
            period: 'allTime',
            result: [1, 2, 3]
        };

        const expected = {
            allTime: {
                ids: [1, 2, 3],
                isFetching: false
            },
            unranked: {
                ids: [],
                isFetching: false
            },
            weekly: {
                ids: [],
                isFetching: false
            }
        };

        expect(reducers(state, actions.fetchLeaderboardSuccess(payload))).toEqual(expected);
    });
});
