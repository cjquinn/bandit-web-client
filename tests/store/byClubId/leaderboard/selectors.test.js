import { getIds, getIsFetching, makeGetLeaderboard } from '../../../../src/store/byClubId/leaderboard/selectors';

describe('selectors', () => {
    const props = {
        period: 'allTime',
        match: {params: {clubId: 1}}
    };

    it('getIsIds', () => {
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
            }
        };

        expect(getIds(state, props)).toEqual([1, 2, 3]);
    });

    it('getIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    leaderboard: {
                        allTime: {
                            ids: [],
                            isFetching: false
                        },
                        weekly: {
                            ids: [],
                            isFetching: true
                        }
                    }
                }
            }
        };

        expect(getIsFetching(state, props)).toBe(false);
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
            }
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
                }
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                }
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                }
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                }
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
                }
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
                }
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                }
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                }
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
                }
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                user: {
                    id: 1,
                    name: 'Russell'  
                }
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                }
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
                }
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                }
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                }
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
                }
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                user: {
                    id: 3,
                    name: 'Nathan'
                }
            },
            {
                id: 4,
                rating: 1012,
                wins: 0,
                losses: 6,
                user: {
                    id: 4,
                    name: 'Tom'
                }
            }
        ];

        expect(makeGetLeaderboard()(state, propsWithPlayerId)).toEqual(expectedWithPlayerId);
    });
});
