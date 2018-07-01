// Selectors
import { getIds, getIsFetching, makeGetLeaderboard } from '../../../../src/store/byClubId/leaderboard/selectors';

describe('selectors', () => {
    const props = {period: 'allTime'};

    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    leaderboard: {
                        allTime: {
                            ids: [1, 2, 3],
                            isFetching: false
                        },
                        weekly: {
                            ids: [],
                            isFetching: true
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        expect(getIds(state, props)).toEqual([1, 2, 3]);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIds(stateNoByClubId, props)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    leaderboard: {
                        allTime: {
                            ids: [],
                            isFetching: true
                        },
                        weekly: {
                            ids: [],
                            isFetching: false
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        expect(getIsFetching(state, props)).toBe(true);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIsFetching(stateNoByClubId, props)).toBe(false);
    });

    it('makeGetLeaderboard', () => {
        const state = {
            byClubId: {
                1: {
                    leaderboard: {
                        allTime: {
                            ids: [2, 1, 3, 4],
                            isFetching: false
                        },
                        weekly: {
                            ids: [],
                            isFetching: true
                        }
                    }
                }
            },
            entities: {
                clubs: {
                    1: {
                        id: 1,
                        bandit_id: '3'
                    }
                },
                players: {
                    1: {
                        id: 1,
                        rating: 1600,
                        wins: 1,
                        losses: 3,
                        user: 1
                    },
                    2: {
                        id: 2,
                        rating: 1800,
                        wins: 1,
                        losses: 1,
                        user: 2
                    },
                    3: {
                        id: 3,
                        rating: 1220,
                        wins: 2,
                        losses: 1,
                        user: 3
                    },
                    4: {
                        id: 4,
                        rating: 1012,
                        wins: 0,
                        losses: 6,
                        user: 4
                    }
                },
                users: {
                    1: {
                        id: 1,
                        name: 'Russell'
                    },
                    2: {
                        id: 2,
                        name: 'Christy'
                    },
                    3: {
                        id: 3,
                        name: 'Nathan'
                    },
                    4: {
                        id: 4,
                        name: 'Tom'
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected  = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                },
                isBandit: false
            }
        ];

        expect(makeGetLeaderboard()(state, props)).toEqual(expected);

        const propsWithLimit = {
            ...props,
            limit: 1
        };

        const expectedWithLimit = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithLimit)).toEqual(expectedWithLimit);

        let propsWithPlayerId = {
            ...props,
            limit: 3,
            playerId: 2
        };

        let expectedWithPlayerId = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithPlayerId)).toEqual(expectedWithPlayerId);

        propsWithPlayerId.playerId = 1;

        expectedWithPlayerId = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithPlayerId)).toEqual(expectedWithPlayerId);

        propsWithPlayerId.playerId = 4;

        expectedWithPlayerId = [
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                },
                isBandit: false
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithPlayerId)).toEqual(expectedWithPlayerId);

        propsWithPlayerId.playerId = 3;

        expectedWithPlayerId = [
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                },
                isBandit: false
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithPlayerId)).toEqual(expectedWithPlayerId);

        const stateNoByClubId = {
            byClubId: {},
            entities: {
                players: {},
                users: {}
            },
            user: {clubId: 1}
        };

        expect(makeGetLeaderboard()(stateNoByClubId, props)).toEqual([]);
    });
});
