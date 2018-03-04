import reducers from '../../../../src/store/Entities/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            clubs: {},
            disputes: {},
            matches: {},
            players: {},
            snapshots: {},
            users: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });

    it('cache entities', () => {
        const state = {
            clubs: {
                1: {id: 1, name: 'Bandit'}
            },
            disputes: {
                1: {match_id: 1, is_resolved: null}  
            },
            matches: {
                1: {id: 1, deleted: null}
            },
            players: {
                1: {id: 1, rating: 1200}
            },
            snapshots: {
                '1-1': {match_id: 1, player_id: 1, rating: 1200}
            },
            users: {
                1: {id: 1, name: 'Christy'}
            }
        };

        const payload = {
            entities: {
                clubs: {
                    2: {id: 2, name: 'Squash'}
                },
                disputes: {
                    2: {match_id: 2, is_resolved: null}
                },
                matches: {
                    2: {id: 2, deleted: null}
                },
                players: {
                    2: {id: 2, rating: 1200}
                },
                snapshots: {
                    '2-2': {match_id: 2, player_id: 2, rating: 1200}
                },
                users: {
                    2: {id: 2, name: 'Russell'}
                }
            }
        };

        const expected = {
            clubs: {
                2: {id: 2, name: 'Squash'},
                1: {id: 1, name: 'Bandit'}
            },
            disputes: {
                2: {match_id: 2, is_resolved: null},
                1: {match_id: 1, is_resolved: null}  
            },
            matches: {
                2: {id: 2, deleted: null},
                1: {id: 1, deleted: null}
            },
            players: {
                2: {id: 2, rating: 1200},
                1: {id: 1, rating: 1200}
            },
            snapshots: {
                '2-2': {match_id: 2, player_id: 2, rating: 1200},
                '1-1': {match_id: 1, player_id: 1, rating: 1200}
            },
            users: {
                1: {id: 1, name: 'Christy'},
                2: {id: 2, name: 'Russell'}
            }
        };

        expect(reducers(state, {type: 'TYPE', payload})).toEqual(expected);
    });
});
