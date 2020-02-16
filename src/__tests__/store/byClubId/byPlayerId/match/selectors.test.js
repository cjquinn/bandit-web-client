// Selectors
import {
    getIds,
    getIsFetching,
    getPage,
    getMatchEntity,
    makeGetMatch,
    makeGetMatches } from '../../../../../store/byClubId/byPlayerId/match/selectors';

describe('selectors', () => {
    const propsWithPlayerId = {match: {params: {playerId: 1}}};

    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                ids: [1, 2],
                                isFetching: false,
                                page: 1
                            }
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = [1, 2];

        expect(getIds(state, propsWithPlayerId)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIds(stateNoByClubId, propsWithPlayerId)).toEqual([]);

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            user: {clubId: 1}
        };

        expect(getIds(stateNoByPlayerId, propsWithPlayerId)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                ids: [],
                                isFetching: true,
                                page: 1
                            }
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        expect(getIsFetching(state, propsWithPlayerId)).toBe(true);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIsFetching(stateNoByClubId, propsWithPlayerId)).toBe(false);

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            user: {clubId: 1}
        };

        expect(getIsFetching(stateNoByPlayerId, propsWithPlayerId)).toBe(false);
    });

    it('getPage', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                ids: [],
                                isFetching: false,
                                page: 2
                            }
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = 2;
        
        expect(getPage(state, propsWithPlayerId)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getPage(stateNoByClubId, propsWithPlayerId)).toEqual(1);

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            user: {clubId: 1}
        };

        expect(getPage(stateNoByPlayerId, propsWithPlayerId)).toEqual(1);
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

    it('makeGetMatch', () => {
        const state = {
            entities: {
                clubs: {
                    1: {
                        id: 1,
                        bandit_id: '1'
                    }
                },
                matches: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2,
                        dispute: null
                    }
                },
                players: {
                    1: {
                        id: 1,
                        user: 1,
                        wins: 1,
                        losses: 0
                    },
                    2: {
                        id: 2,
                        user: 2,
                        wins: 1,
                        losses: 0
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
                    }
                }
            },
            user: {clubId: 1}
        };

        const props = {match: {params: {matchId: 1}}};

        const expected  = {
            id: 1,
            player_a: {
                id: 1,
                user: {
                    id: 1,
                    name: 'Russell'  
                },
                wins: 1,
                losses: 0
            },
            player_b: {
                id: 2,
                user: {
                    id: 2,
                    name: 'Christy'
                },
                wins: 1,
                losses: 0
            },
            dispute: null
        };

        expect(makeGetMatch()(state, props)).toEqual(expected);

        const stateNoMatch = {
            entities: {
                matches: {},
                players: {
                    1: {
                        id: 1,
                        user: 1
                    },
                    2: {
                        id: 2,
                        user: 2
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
                    }
                },
                clubs: {
                    1: {bandit_id: '1'}
                }
            },
            user: {
                clubId: 1
            }
        };

        const expectedNoMatch = undefined;

        expect(makeGetMatch()(stateNoMatch, props)).toEqual(expectedNoMatch);
    });

    it('makeGetMatches', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                ids: [1, 2],
                                isFetching: false,
                                page: 1
                            }
                        }
                    }
                }
            },
            entities: {
                clubs: {
                    1: {
                        bandit_id: '1'
                    }
                },
                matches: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2,
                        dispute: null,
                        created: '2018-06-10 12:00:00'
                    },
                    2: {
                        id: 2,
                        player_a: 2,
                        player_b: 3,
                        dispute: null,
                        created: '2018-06-11 12:00:00'
                    }
                },
                players: {
                    1: {
                        id: 1,
                        user: 1,
                        wins: 1
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
            },
            user: {clubId: 1}
        };

        const expected  = [
            {
                date: 'Sunday 10th',
                matches: [
                    {
                        id: 1,
                        player_a: {
                            id: 1,
                            user: {
                                id: 1,
                                name: 'Russell'  
                            },
                            wins: 1
                        },
                        player_b: {
                            id: 2,
                            user: {
                                id: 2,
                                name: 'Christy'
                            }
                        },
                        dispute: null,
                        created: '2018-06-10 12:00:00'
                    }
                ]
            },
            {
                date: 'Monday 11th',
                matches: [
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
                        },
                        dispute: null,
                        created: '2018-06-11 12:00:00'
                    }
                ]
            }
        ];

        expect(makeGetMatches()(state, propsWithPlayerId)).toEqual(expected);

        const propsWithLimit = {
            ...propsWithPlayerId,
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
                    },
                    wins: 1
                },
                player_b: {
                    id: 2,
                    user: {
                        id: 2,
                        name: 'Christy'
                    }
                },
                dispute: null,
                created: '2018-06-10 12:00:00'
            }
        ];

        expect(makeGetMatches()(state, propsWithLimit)).toEqual(expectedWithLimit);

        const stateNoByClubId = {
            byClubId: {},
            entities: {
                matches: {}
            },
            user: {clubId: 1}
        };

        expect(makeGetMatches()(stateNoByClubId, propsWithPlayerId)).toEqual([]);

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            entities: {
                matches: {}
            },
            user: {clubId: 1}
        };

        expect(makeGetMatches()(stateNoByPlayerId, propsWithPlayerId)).toEqual([]);
    });
});
