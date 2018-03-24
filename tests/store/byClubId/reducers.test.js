import { fetchMatchesSuccess } from '../../../src/store/byClubId/byPlayerId/match/actions';
import { fetchPlayersSuccess } from '../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../src/store/byClubId/reducers';

describe('byClubId', () => {
    const state = {
        1: {
            byPlayerId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: true,
                        page: 1
                    },
                }
            },
            player: {
                didError: false,
                ids: [],
                isFetching: true,
                orderBy: 'a-z'
            }
        },
        2: {
            byPlayerId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            },
            player: {
                didError: false,
                ids: [],
                isFetching: false,
                orderBy: 'a-z'
            }
        }
    };

    it('byPlayerId', () => {
        const payload = {
            clubId: 1,
            playerId: 1,
            result: [1, 2, 3],
            page: 2
        };

        const expected = {
            1: {
                byPlayerId: {
                    1: {
                        match: {
                            didError: false,
                            ids: [1, 2, 3],
                            isFetching: false,
                            page: 2
                        }
                    }
                },
                player: {
                    didError: false,
                    ids: [],
                    isFetching: true,
                    orderBy: 'a-z'
                }
            },
            2: {
                byPlayerId: {
                    1: {
                        match: {
                            didError: false,
                            ids: [],
                            isFetching: false,
                            page: 1
                        }
                    }
                },
                player: {
                    didError: false,
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, fetchMatchesSuccess(payload))).toEqual(expected);
    });

    it('player', () => {
        const payload = {
            clubId: 1,
            playerId: 1,
            result: [1, 2, 3]
        };

        const expected = {
            1: {
                byPlayerId: {
                    1: {
                        match: {
                            didError: false,
                            ids: [],
                            isFetching: true,
                            page: 1
                        }
                    }
                },
                player: {
                    didError: false,
                    ids: [1, 2, 3],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            },
            2: {
                byPlayerId: {
                    1: {
                        match: {
                            didError: false,
                            ids: [],
                            isFetching: false,
                            page: 1
                        }
                    }
                },
                player: {
                    didError: false,
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, fetchPlayersSuccess(payload))).toEqual(expected);
    });
});
