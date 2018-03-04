// Actions
import * as actions from '../../../src/store/Player/actions';

// Reducers
import reducers from '../../../src/store/Player/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            byClubId: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchPlayers', () => {
    it(actions.fetchPlayersRequest.toString(), () => {
        const state = {
            byClubId: {
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        const payload = {clubId: 1};

        const expected = {
            byClubId: {
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                },
                1: {
                    ids: [],
                    isFetching: true,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, actions.fetchPlayersRequest(payload))).toEqual(expected);
    });

    it(actions.fetchPlayersFailure.toString(), () => {
        const state = {
            byClubId: {
                1: {
                    ids: [],
                    isFetching: true,
                    orderBy: 'a-z'
                },
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        const payload = {clubId: 1};

        const expected = {
            byClubId: {
                1: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                },
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, actions.fetchPlayersFailure(payload))).toEqual(expected);
    });

    it(actions.fetchPlayersSuccess.toString(), () => {
        const state = {
            byClubId: {
                1: {
                    ids: [],
                    isFetching: true,
                    orderBy: 'a-z'
                }
            }
        };

        const payload = {
            clubId: 1,
            result: [1, 2, 3],
            entities: {
                players: {
                    1: {
                        id: 1,
                        name: 'Christy',
                        rating: 1180,
                        wins: 1,
                        losses: 1
                    },
                    2: {
                        id: 2,
                        name: 'Russell',
                        rating: 1220,
                        wins: 2,
                        losses: 1
                    },
                    3: {
                        id: 3,
                        name: 'Nathan',
                        rating: 1160,
                        wins: 1,
                        losses: 3
                    }
                }
            }
        };

        const expected = {
            byClubId: {
                1: {
                    ids: [1, 2, 3],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, actions.fetchPlayersSuccess(payload))).toEqual(expected);
    });
});

describe('orderPlayersBy', () => {
    it(actions.orderPlayersBy.toString(), () => {
        const state = {
            byClubId: {
                1: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                },
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        const payload = {
            clubId: 1,
            orderBy: 'rating'
        };

        const expected = {
            byClubId: {
                1: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'rating'
                },
                2: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, actions.orderPlayersBy(payload))).toEqual(expected);
    });
});
