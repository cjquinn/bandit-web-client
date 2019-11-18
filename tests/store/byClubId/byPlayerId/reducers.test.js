// Actions
import * as actions from '../../../../src/store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/byPlayerId/reducers';

describe('byPlayerId', () => {
    it('shape', () => {
        const payload = {playerId: 1};

        const expected = {
            1: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        expect(reducers(undefined, {type: 'ANY_OLD_TYPE', payload})).toEqual(expected);
    });

    it('multiple player id', () => {
        const payload = {playerId: ['all', 1, 2]};

        const expected = {
            'all': {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            },
            1: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            },
            2: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        expect(reducers(undefined, {type: 'ANY_OLD_TYPE', payload})).toEqual(expected);
    });

    it('real action', () => {
        const state = {
            'all': {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            },
            1: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            },
            2: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        const payload = {
            result: 2,
            playerId: ['all', 1]
        };

        const expected = {
            'all': {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [2],
                    isFetching: false,
                    page: 1,
                    total: 1
                }
            },
            1: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [2],
                    isFetching: false,
                    page: 1,
                    total: 1
                }
            },
            2: {
                challenge: {
                    accepted: {
                        ids: [],
                        isFetching: false
                    },
                    all: {
                        ids: [],
                        isFetching: false
                    },
                    open: {
                        ids: [],
                        isFetching: false
                    }
                },
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        expect(reducers(state, actions.addMatchSuccess(payload))).toEqual(expected);
    });
});
