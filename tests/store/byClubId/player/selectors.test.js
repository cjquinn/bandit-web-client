// Actions
import { orderPlayersBy } from '../../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../../src/store/reducers';

// Selectors
import {
    getDidError,
    getIds,
    getIsFetching,
    getOrderBy,
    getPlayerEntity,
    getPlayerEntities,
    makeGetIsFetching,
    makeGetOrderBy,
    makeGetPlayers,
    makeGetPlayersByName,
    makeGetPlayersByGames,
    makeGetPlayersByRating,
    makeGetPlayersOrdered } from '../../../../src/store/byClubId/player/selectors';

describe('selectors', () => {
    it('getDidError', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(getDidError(state)).toBe(false);
    });

    it('getIds', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(getIds(state)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(getIsFetching(state)).toBe(false);
    });

    it('getOrderBy', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(getOrderBy(state)).toEqual('a-z');
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

    it('getPlayerEntities', () => {
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

        const expected = {
            1: {
                id: 1,
                rating: 1200
            }
        };

        expect(getPlayerEntities(state)).toEqual(expected);
    });

    it('makeGetOrderBy', () => {
        const state = {
            byClubId: {
                1: {
                    player: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        orderBy: 'a-z'
                    }
                }
            }
        };

        const props = {match: {params: {clubId: 1}}};

        const expected = 'a-z';

        expect(makeGetOrderBy()(state, props)).toEqual(expected);
    });

    it('makeGetIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    player: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        orderBy: 'a-z'
                    }
                }
            }
        };

        const props = {match: {params: {clubId: 1}}};

        expect(makeGetIsFetching()(state, props)).toBe(false);
    });

    const stateForGetPlayers = {
        byClubId: {
            1: {
                player: {
                    didError: false,
                    ids: [1, 2, 3],
                    isFetching: false,
                    orderBy: 'a-z'
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
        }
    };

    const propsForGetPlayers = {match: {params: {clubId: 1}}};

    it('makeGetPlayers', () => {
        const expected  = [
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

        expect(makeGetPlayers()(stateForGetPlayers, propsForGetPlayers)).toEqual(expected);
    });

    const expectedPlayersByName  = [
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
            id: 1,
            rating: 1600,
            wins: 1,
            losses: 3,
            user: {
                id: 1,
                name: 'Russell'  
            }
        }
    ];

    it('makeGetPlayersByName', () => {
        expect(makeGetPlayersByName()(stateForGetPlayers, propsForGetPlayers)).toEqual(expectedPlayersByName);
    });

    const expectedPlayersByGames  = [
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

    it('makeGetPlayersByGames', () => {
        expect(makeGetPlayersByGames()(stateForGetPlayers, propsForGetPlayers)).toEqual(expectedPlayersByGames);
    });

    const expectedPlayersByRating  = [
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

    it('makeGetPlayersByRating', () => {
        expect(makeGetPlayersByRating()(stateForGetPlayers, propsForGetPlayers)).toEqual(expectedPlayersByRating);
    });

    it('makeGetPlayersOrdered', () => {
        const stateOrderByAz = reducers(stateForGetPlayers, orderPlayersBy({clubId: 1, orderBy: 'a-z'}));

        expect(makeGetPlayersOrdered()(stateOrderByAz, propsForGetPlayers)).toEqual(expectedPlayersByName);

        const stateOrderByGames = reducers(stateForGetPlayers, orderPlayersBy({clubId: 1, orderBy: 'games'}));

        expect(makeGetPlayersOrdered()(stateOrderByGames, propsForGetPlayers)).toEqual(expectedPlayersByGames);

        const stateOrderByRating = reducers(stateForGetPlayers, orderPlayersBy({clubId: 1, orderBy: 'rating'}));

        expect(makeGetPlayersOrdered()(stateOrderByRating, propsForGetPlayers)).toEqual(expectedPlayersByRating);
    });
});
