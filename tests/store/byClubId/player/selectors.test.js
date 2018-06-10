// Actions
import { ORDER_PLAYERS_BY } from '../../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../../src/store/reducers';

// Selectors
import {
    getIds,
    getIsFetching,
    getOrderBy,
    getPlayerEntity,
    makeGetPlayer,
    getPlayers } from '../../../../src/store/byClubId/player/selectors';

describe('selectors', () => {
    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    player: {
                        ids: [1, 2],
                        isFetching: true,
                        orderBy: 'a-z'
                    }
                }
            },
            user: {clubId: 1}
        };

        expect(getIds(state)).toEqual([1, 2]);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIds(stateNoByClubId)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    player: {
                        ids: [],
                        isFetching: true,
                        orderBy: 'a-z'
                    }
                }
            },
            user: {clubId: 1}
        };

        expect(getIsFetching(state)).toBe(true);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIsFetching(stateNoByClubId)).toBe(false);
    });

    it('getOrderBy', () => {
        const state = {
            byClubId: {
                1: {
                    player: {
                        ids: [],
                        isFetching: false,
                        orderBy: 'rating'
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = 'rating';

        expect(getOrderBy(state)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getOrderBy(stateNoByClubId)).toEqual('a-z');
    });

    it('getPlayerEntity', () => {
        const state = {
            entities: {
                players: {
                    1: {
                        id: 1,
                        rating: 1200
                    }
                }
            }
        };

        const props = {match: {params: {playerId: 1}}};

        const expected = {
            id: 1,
            rating: 1200
        };

        expect(getPlayerEntity(state, props)).toEqual(expected);
    });

    it('makeGetPlayer', () => {
        const state = {
            entities: {
                clubs: {
                    1: {
                        id: 1,
                        bandit_id: '1'
                    }
                },
                players: {
                    1: {
                        id: 1,
                        rating: 1600,
                        wins: 1,
                        losses: 3,
                        user: 1
                    }
                },
                users: {
                    1: {
                        id: 1,
                        name: 'Russell'
                    }
                }
            },
            user: {clubId: 1}
        };

        const props = {match: {params: {playerId: 1}}};

        const expected = {
            id: 1,
            rating: 1600,
            wins: 1,
            losses: 3,
            user: {
                id: 1,
                name: 'Russell'
            },
            isBandit: true
        };

        expect(makeGetPlayer()(state, props)).toEqual(expected);

        const stateNoPlayer = {
            entities: {
                players: {},
                users: {
                    1: {
                        id: 1,
                        name: 'Russell'
                    }
                }
            },
            user: {}
        };

        const expectedNoPlayer = undefined;

        expect(makeGetPlayer()(stateNoPlayer, props)).toEqual(expectedNoPlayer);
    });

    const stateForGetPlayers = {
        byClubId: {
            1: {
                player: {
                    ids: [1, 2, 3],
                    isFetching: false,
                    orderBy: 'a-z'
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
                }
            }
        },
        user: {clubId: 1}
    };

    it('getPlayers noByClubId', () => {
        const stateNoByClubId = {
            byClubId: {},
            entities: {
                clubs: {},
                players: {},
                users: {}
            },
            user: {clubId: 1}
        };

        expect(getPlayers(stateNoByClubId)).toEqual([]);
    });

    it('getPlayers a-z', () => {
        const state = reducers(stateForGetPlayers, {
            type: ORDER_PLAYERS_BY,
            payload: {
                clubId: 1,
                orderBy: 'a-z'
            }
        });

        const expected  = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                games: 2,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            },
            {
                id: 3,
                rating: 1220,
                wins: 2,
                losses: 1,
                games: 3,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            },
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                games: 4,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                isBandit: false
            }
        ];

        expect(getPlayers(state)).toEqual(expected);
    });


    it('getPlayers games', () => {
        const state = reducers(stateForGetPlayers, {
            type: ORDER_PLAYERS_BY,
            payload: {
                clubId: 1,
                orderBy: 'games'
            }
        });

        const expected  = [
            {
                id: 1,
                rating: 1600,
                wins: 1,
                losses: 3,
                games: 4,
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
                games: 3,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            },
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                games: 2,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                isBandit: false
            }
        ];

        expect(getPlayers(state)).toEqual(expected);
    });

    it('getPlayers rating', () => {
        const state = reducers(stateForGetPlayers, {
            type: ORDER_PLAYERS_BY,
            payload: {
                clubId: 1,
                orderBy: 'rating'
            }
        });

        const expected  = [
            {
                id: 2,
                rating: 1800,
                wins: 1,
                losses: 1,
                games: 2,
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
                games: 4,
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
                games: 3,
                user: {
                    id: 3,
                    name: 'Nathan'
                },
                isBandit: true
            }
        ];

        expect(getPlayers(state)).toEqual(expected);
    });
});
