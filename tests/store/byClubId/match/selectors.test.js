// Selectors
import {
    getDidError,
    getIds,
    getIsFetching,
    getPage,
    getMatchEntity,
    getMatchEntities,
    makeGetDidError,
    makeGetIsFetching,
    makeGetPage,
    makeGetMatches } from '../../../../src/store/byClubId/match/selectors';

describe('selectors', () => {
    it('getDidError', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(getDidError(state)).toBe(false);
    });

    it('getIds', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(getIds(state)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(getIsFetching(state)).toBe(false);
    });

    it('getPage', () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(getPage(state)).toEqual(1);
    });

    it('getMatchEntity', () => {
        const state = {
            entities: {
                matches: {
                    1: {
                        id: 1,
                        player_a_id: 1,
                        player_b_id: 2
                    }
                }
            }
        };

        const props = {match: {params: {matchId: 1}}};

        const expected = {
            id: 1,
            player_a_id: 1,
            player_b_id: 2
        };

        expect(getMatchEntity(state, props)).toEqual(expected);
    });

    it('getMatchEntities', () => {
        const state = {
            entities: {
                matches: {
                    1: {
                        id: 1,
                        player_a_id: 1,
                        player_b_id: 2
                    }
                }
            }
        };

        const props = {match: {params: {matchId: 1}}};

        const expected = {
            1: {
                id: 1,
                player_a_id: 1,
                player_b_id: 2
            }
        };

        expect(getMatchEntities(state, props)).toEqual(expected);
    });

    const props = {match: {params: {clubId: 1}}};

    it('makeGetDidError', () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            }
        };

        expect(makeGetDidError()(state, props)).toBe(false);
    });

    it('makeGetIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            }
        };

        expect(makeGetIsFetching()(state, props)).toBe(false);
    });

    it('makeGetPage', () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            }
        };

        const expected = 1;

        expect(makeGetPage()(state, props)).toEqual(expected);
    });

    const stateForGetMatches = {
        byClubId: {
            1: {
                match: {
                    didError: false,
                    ids: [1, 2, 3, 4],
                    isFetching: false,
                    page: 1
                }
            }
        },
        entities: {
            matches: {
                1: {
                    id: 1,
                    player_a: 1,
                    player_b: 2
                },
                2: {
                    id: 2,
                    player_a: 2,
                    player_b: 3
                },
                3: {
                    id: 3,
                    player_a: 3,
                    player_b: 1
                },
                4: {
                    id: 4,
                    player_a: 2,
                    player_b: 1
                }
            },
            players: {
                1: {
                    id: 1,
                    user: 1
                },
                2: {
                    id: 2,
                    user: 2
                },
                3: {
                    id: 3,
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

    it('makeGetMatches', () => {
        const expectedAll  = [
            {
                id: 1,
                player_a: {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Russell'  
                    }
                },
                player_b: {
                    id: 2,
                    user: {
                        id: 2,
                        name: 'Christy'
                    }
                }
            },
            {
                id: 2,
                player_a: {
                    id: 2,
                    user: {
                        id: 2,
                        name: 'Christy'
                    }
                },
                player_b: {
                    id: 3,
                    user: {
                        id: 3,
                        name: 'Nathan'
                    }
                }
            },
            {
                id: 3,
                player_a: {
                    id: 3,
                    user: {
                        id: 3,
                        name: 'Nathan'
                    }
                },
                player_b: {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Russell'  
                    }
                }
            },
            {
                id: 4,
                player_a: {
                    id: 2,
                    user: {
                        id: 2,
                        name: 'Christy'
                    }
                },
                player_b: {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Russell'  
                    }
                }
            }
        ];

        expect(makeGetMatches()(stateForGetMatches, props)).toEqual(expectedAll);

        // const propsWithLimit = {
        //     ...props,
        //     limit: 3
        // };
        // const expectedWithLimit = expectedAll.slice(0, 3);

        // expect(makeGetMatches()(stateForGetMatches, propsWithLimit)).toEqual(expectedWithLimit);
    });
});
