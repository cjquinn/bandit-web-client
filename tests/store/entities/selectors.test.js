// Selectors
import {
    getChallengeEntities,
    getClubEntities,
    getDisputeEntities,
    getMatchEntities,
    getPlayerEntities } from '../../../src/store/entities/selectors';

describe('selectors', () => {
    it('getChallengeEntities', () => {
        const state = {
            entities: {
                challenges: {
                    1: {id: 1},
                    2: {id: 2}
                }
            }
        };

        const expected = {
            1: {id: 1},
            2: {id: 2}
        };

        expect(getChallengeEntities(state)).toEqual(expected);
    });

    it('getClubEntities', () => {
        const state = {
            entities: {
                clubs: {
                    1: {id: 1, name: 'Squash'},
                    2: {id: 2, name: 'Bandit'}
                }
            }
        };

        const expected = {
            1: {id: 1, name: 'Squash'},
            2: {id: 2, name: 'Bandit'}
        };

        expect(getClubEntities(state)).toEqual(expected);
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
});
