// Selectors
import {
    getIds,
    getIsFetching,
    getDisputeEntity,
    getDisputeEntities,
    makeGetDispute,
    makeGetDisputes } from '../../../../src/store/byClubId/dispute/selectors';

describe('selectors', () => {
    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    dispute: {
                        ids: [1, 2],
                        isFetching: true
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
                    dispute: {
                        ids: [],
                        isFetching: true
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

    it('getDisputeEntity', () => {
        const state = {
            entities: {
                disputes: {
                    1: {
                        match_id: 1,
                        is_resolved: null
                    }
                }
            },
            user: {clubId: 1}
        };

        const props = {disputeId: 1};

        const expected = {
            match_id: 1,
            is_resolved: null
        };

        expect(getDisputeEntity(state, props)).toEqual(expected);
    });

    it('getDisputeEntities', () => {
        const state = {
            entities: {
                disputes: {
                    1: {
                        match_id: 1,
                        is_resolved: null
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = {
            1: {
                match_id: 1,
                is_resolved: null
            }
        };

        expect(getDisputeEntities(state)).toEqual(expected);
    });

    it('makeGetDispute', () => {
        const state = {
            entities: {
                disputes: {
                    1: {
                        match_id: 1,
                        match: 1     
                    }
                },
                matches: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2
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
                    }
                },
                users: {
                    1: {
                        id: 1
                    },
                    2: {
                        id: 2
                    }
                }
            },
            user: {clubId: 1}
        };

        const props = {disputeId: 1};

        const expected = {
            match_id: 1,
            match: {
                id: 1,
                player_a: {
                    id: 1,
                    user: {
                        id: 1
                    }
                },
                player_b: {
                    id: 2,
                    user: {
                        id: 2
                    }
                }
            }
        };

        expect(makeGetDispute()(state, props)).toEqual(expected);

        const stateNoDispute = {
            entities: {
                disputes: {},
                matches: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2
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
                    }
                },
                users: {
                    1: {
                        id: 1
                    },
                    2: {
                        id: 2
                    }
                }
            },
            user: {clubId: 1}
        };

        const expectedNoDispute = undefined;

        expect(makeGetDispute()(stateNoDispute, props)).toEqual(expectedNoDispute);
    });

    it('makeGetDisputes', () => {
        const state = {
            byClubId: {
                1: {
                    dispute: {
                        ids: [1]
                    }
                }
            },
            entities: {
                disputes: {
                    1: {
                        match_id: 1,
                        match: 1     
                    }
                },
                matches: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2
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
                    }
                },
                users: {
                    1: {
                        id: 1
                    },
                    2: {
                        id: 2
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = [{
            match_id: 1,
            match: {
                id: 1,
                player_a: {
                    id: 1,
                    user: {
                        id: 1
                    }
                },
                player_b: {
                    id: 2,
                    user: {
                        id: 2
                    }
                }
            }
        }];

        expect(makeGetDisputes()(state)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            entities: {
                disputes: {},
                matches: {},
                players: {},
                users: {}
            },
            user: {clubId: 1}
        };

        expect(makeGetDisputes()(stateNoByClubId)).toEqual([]);
    });
});
