import { normalize } from 'normalizr';

// Schema
import * as schema from '../../src/store/schema';

describe('club', () => {
    it('normalize', () => {
        const response = {
            club: {
                id: 1,
                name: 'Bandit',
                founder_id: 1,
                founder: {
                    id: 1,
                    name: 'Christy'
                }
            }
        };

        const expected = {
            result: 1,
            entities: {
                clubs: {
                    1: {
                        id: 1,
                        name: 'Bandit',
                        founder_id: 1,
                        founder: 1
                    }
                },
                users: {
                    1: {
                        id: 1,
                        name: 'Christy'
                    }
                }
            }
        };

        expect(normalize(response.club, schema.club)).toEqual(expected);
    });
});
