import moment from 'moment';

// Selectors
import {
    getIds,
    getIsFetching,
    getChallengeEntity,
    makeGetChallenge,
    makeGetChallenges } from '../../../../../src/store/byClubId/byPlayerId/challenge/selectors';

describe('selectors', () => {
    const props = {
        match: {params: {playerId: 1}},
        filter: 'accepted'
    };

    it('getIds', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            challenge: {
                                accepted: {
                                    ids: [1, 2],
                                    isFetching: true
                                },
                                open: {
                                    ids: [],
                                    isFetching: false
                                }
                            }
                        }
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = [1, 2];

        expect(getIds(state, props)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getIds(stateNoByClubId, props)).toEqual([]);

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            user: {clubId: 1}
        };

        expect(getIds(stateNoByPlayerId, props)).toEqual([]);
    });

    it('getIsFetching', () => {
        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            challenge: {
                                accepted: {
                                    ids: [1, 2],
                                    isFetching: true
                                },
                                open: {
                                    ids: [],
                                    isFetching: false
                                }
                            }
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

        const stateNoByPlayerId = {
            byClubId: {
                1: {
                    byPlayerId: {}
                }
            },
            user: {clubId: 1}
        };

        expect(getIsFetching(stateNoByPlayerId, props)).toBe(false);
    });

    it('getChallengeEntity', () => {
        const state = {
            entities: {
                challenges: {
                    1: {
                        id: 1,
                        player_a_id: 1,
                        player_b_id: 2
                    }
                }
            }
        };

        const props = {match: {params: {challengeId: '1'}}};

        const expected = {
            id: 1,
            player_a_id: 1,
            player_b_id: 2
        };

        expect(getChallengeEntity(state, props)).toEqual(expected);
    });

    it('makeGetChallenge', () => {
        const state = {
            entities: {
                challenges: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2
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
            }
        };

        const props = {match: {params: {challengeId: '1'}}};

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
            }
        };

        expect(makeGetChallenge()(state, props)).toEqual(expected);

        const stateNoChallenge = {
            entities: {
                challenges: {},
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
                }
            }
        };

        const expectedNoChallenge = undefined;

        expect(makeGetChallenge()(stateNoChallenge, props)).toEqual(expectedNoChallenge);
    });

    it('makeGetChallenges', () => {
        const thisWeek = moment();
        const nextWeek = moment().add(1, 'week');
        const further = moment().add(2, 'week');

        const state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        'all': {
                            challenge: {
                                accepted: {
                                    ids: [1, 2, 3],
                                    isFetching: true
                                },
                                open: {
                                    ids: [],
                                    isFetching: false
                                }
                            }
                        },
                        1: {
                            challenge: {
                                accepted: {
                                    ids: [1, 2, 3],
                                    isFetching: true
                                },
                                open: {
                                    ids: [],
                                    isFetching: false
                                }
                            }
                        }
                    }
                }
            },
            entities: {
                challenges: {
                    1: {
                        id: 1,
                        player_a: 1,
                        player_b: 2,
                        match_datetime: thisWeek
                    },
                    2: {
                        id: 2,
                        player_a: 1,
                        player_b: 2,
                        match_datetime: nextWeek
                    },
                    3: {
                        id: 3,
                        player_a: 1,
                        player_b: 2,
                        match_datetime: further
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
                    1: {id: 1},
                    2: {id: 2}
                }
            },
            user: {clubId: 1}
        };

        const expected  = [
            {
                id: 1,
                player_a: {
                    id: 1,
                    user: {id: 1}
                },
                player_b: {
                    id: 2,
                    user: {id: 2}
                },
                match_datetime: thisWeek,
                moment: thisWeek
            },
            {
                id: 2,
                player_a: {
                    id: 1,
                    user: {id: 1}
                },
                player_b: {
                    id: 2,
                    user: {id: 2}
                },
                match_datetime: nextWeek,
                moment: nextWeek
            },
            {
                id: 3,
                player_a: {
                    id: 1,
                    user: {id: 1}
                },
                player_b: {
                    id: 2,
                    user: {id: 2}
                },
                match_datetime: further,
                moment: further
            }
        ];

        expect(makeGetChallenges()(state, props)).toEqual(expected);

        const propsAllPlayerId = {
            playerId: 'all',
            filter: 'accepted'
        };

        const expectedByPeriod = [
            {
                period: 'This Week',
                challenges: [
                    {
                        id: 1,
                        player_a: {
                            id: 1,
                            user: {id: 1}
                        },
                        player_b: {
                            id: 2,
                            user: {id: 2}
                        },
                        match_datetime: thisWeek,
                        moment: thisWeek
                    }
                ]
            },
            {
                period: 'Next Week',
                challenges: [
                    {
                        id: 2,
                        player_a: {
                            id: 1,
                            user: {id: 1}
                        },
                        player_b: {
                            id: 2,
                            user: {id: 2}
                        },
                        match_datetime: nextWeek,
                        moment: nextWeek
                    }
                ]
            },
            {
                period: 'Further',
                challenges: [
                    {
                        id: 3,
                        player_a: {
                            id: 1,
                            user: {id: 1}
                        },
                        player_b: {
                            id: 2,
                            user: {id: 2}
                        },
                        match_datetime: further,
                        moment: further
                    }
                ]
            }
        ];

        expect(makeGetChallenges()(state, propsAllPlayerId)).toEqual(expectedByPeriod);
    });
});
