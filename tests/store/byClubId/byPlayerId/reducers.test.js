import { fetchMatchesSuccess } from '../../../../src/store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/byPlayerId/reducers';

describe('byPlayerId', () => {
    const state = {
        1: {
            match: {
                didError: false,
                ids: [],
                isFetching: true,
                page: 1
            },
        },
        2: {
            match: {
                didError: false,
                ids: [],
                isFetching: false,
                page: 1
            }
        }
    };

    it('byPlayerId', () => {
        const payload = {
            playerId: 1,
            result: [1, 2, 3],
            page: 2
        };

        const expected = {
            1: {
                match: {
                    didError: false,
                    ids: [1, 2, 3],
                    isFetching: false,
                    page: 2
                }
            },
            2: {
                match: {
                    didError: false,
                    ids: [],
                    isFetching: false,
                    page: 1
                }
            }
        };

        expect(reducers(state, fetchMatchesSuccess(payload))).toEqual(expected);
    });
});
