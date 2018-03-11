// Selectors
import {
    getDidError,
    getIds,
    getIsFetching,
    getLimit,
    getPage,
    getMatchEntity,
    getMatchEntities,
    makeGetMatches } from '../../../../src/store/byClubId/match/selectors';

describe('selectors', () => {
    const propsWithClubId = {match: {params: {clubId: 1}}};

    it('getDidError', () => {
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

        expect(getDidError(state, propsWithClubId)).toBe(false);
    });

    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: false,
                        ids: [1, 2, 3, 4, 5],
                        isFetching: false,
                        page: 1
                    }
                }
            }
        };

        const expected = [1, 2, 3, 4, 5];

        expect(getIds(state, propsWithClubId)).toEqual(expected);

        const propsWithLimit = {
            ...propsWithClubId,
            limit: 3
        };

        const expectedWithLimit = [1, 2, 3];

        expect(getIds(state, propsWithLimit)).toEqual(expectedWithLimit);
    });

    it('getIsFetching', () => {
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

        expect(getIsFetching(state, propsWithClubId)).toBe(false);
    });

    it('getLimit', () => {
        const props = {
            limit: 3
        };

        const expected = 3;

        expect(getLimit({}, props)).toEqual(expected);
    });

    it('getPage', () => {
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

        expect(getPage(state, propsWithClubId)).toEqual(expected);
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

    it('makeGetMatches', () => {
        const state = {
            byClubId: {
                1: {
                    match: {
                        didError: false,
                        ids: [1, 2],
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

        const expected  = [
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
            }
        ];

        expect(makeGetMatches()(state, propsWithClubId)).toEqual(expected);

        const propsWithLimit = {
            ...propsWithClubId,
            limit: 1
        };

        const expectedWithLimit = [
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
            }
        ];

        expect(makeGetMatches()(state, propsWithLimit)).toEqual(expectedWithLimit);
    });
});
