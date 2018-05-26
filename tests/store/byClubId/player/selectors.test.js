// Actions
import { orderPlayersBy } from '../../../../src/store/byClubId/player/actions';

// Api
import { setClubId } from '../../../../src/store/api';

// Reducers
import reducers from '../../../../src/store/reducers';

// Selectors
import {
    getIds,
    getIsFetching,
    getOrderBy,
    getPlayerEntity,
    getPlayerEntities,
    makeGetPlayer,
    makeGetPlayers } from '../../../../src/store/byClubId/player/selectors';

setClubId({data: {club: {id: 1}}});

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
            }
        };

        expect(getIds(state)).toEqual([1, 2]);

        const stateNoByClubId = {
            byClubId: {}
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
            }
        };

        expect(getIsFetching(state)).toBe(true);

        const stateNoByClubId = {
            byClubId: {}
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
            }
        };

        const expected = 'rating';

        expect(getOrderBy(state)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {}
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

    it('makeGetPlayer', () => {
        const state = {
            entities: {
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
            }
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
            }
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
            }
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

    it('makeGetPlayers noByClubId', () => {
        const stateNoByClubId = {
            byClubId: {},
            entities: {
                players: {},
                users: {}
            }
        };

        expect(makeGetPlayers()(stateNoByClubId)).toEqual([]);
    });

    it('makeGetPlayers a-z', () => {
        const state = reducers(stateForGetPlayers, orderPlayersBy({
            clubId: 1,
            orderBy: 'a-z'
        }));

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

        expect(makeGetPlayers()(state)).toEqual(expected);
    });


    it('makeGetPlayers games', () => {
        const state = reducers(stateForGetPlayers, orderPlayersBy({
            clubId: 1,
            orderBy: 'games'
        }));

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

        expect(makeGetPlayers()(state)).toEqual(expected);
    });

    it('makeGetPlayers rating', () => {
        const state = reducers(stateForGetPlayers, orderPlayersBy({
            clubId: 1,
            orderBy: 'rating'
        }));

        const expected  = [
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

        expect(makeGetPlayers()(state)).toEqual(expected);
    });
});
