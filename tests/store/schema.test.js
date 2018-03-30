import { normalize } from 'normalizr';

// Schema
import * as schema from '../../src/store/schema';

describe('club + user', () => {
    it('normalize', () => {
        const response = {
            club: {
                id: 1,
                founder: {id: 1}
            }
        };

        const expected = {
            result: 1,
            entities: {
                clubs: {
                    1: {
                        id: 1,
                        founder: 1
                    }
                },
                users: {
                    1: {id: 1}
                }
            }
        };

        expect(normalize(response.club, schema.club)).toEqual(expected);
    });
});

describe('dispute + match + player + user', () => {
    it('normalize', () => {
        const response = {
            dispute: {
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
            }
        };

        const expected = {
            result: 1,
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
                    1: {id: 1},
                    2: {id: 2}
                }
            }
        };

        expect(normalize(response.dispute, schema.dispute)).toEqual(expected);
    });
});
