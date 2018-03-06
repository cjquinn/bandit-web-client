import { fetchPlayersSuccess } from '../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../src/store/byClubId/reducers';

describe('byClubId', () => {
    it('player', () => {
        const state = {
            1: {
                player: {
                    didError: false,
                    ids: [],
                    isFetching: true,
                    orderBy: 'a-z'
                }
            },
            2: {
                player: {
                    didError: false,
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        const payload = {
            clubId: 1,
            result: [1, 2, 3]
        };

        const expected = {
            1: {
                player: {
                    didError: false,
                    ids: [1, 2, 3],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            },
            2: {
                player: {
                    didError: false,
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(state, fetchPlayersSuccess(payload))).toEqual(expected);
    });
});
