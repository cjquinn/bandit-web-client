import { fetchMatchesSuccess } from '../../../../src/store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/byPlayerId/reducers';

describe('byPlayerId', () => {
    const state = {
        1: {
            match: {
                ids: [],
                isFetching: true,
                page: 1,
                total: 0
            },
        },
        2: {
            match: {
                ids: [],
                isFetching: false,
                page: 1,
                total: 0
            }
        }
    };

    it('byPlayerId', () => {
        const payload = {
            playerId: 1,
            result: [1, 2, 3],
            page: 2,
            total: 40
        };

        const expected = {
            1: {
                match: {
                    ids: [1, 2, 3],
                    isFetching: false,
                    page: 2,
                    total: 40
                }
            },
            2: {
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        expect(reducers(state, fetchMatchesSuccess(payload))).toEqual(expected);
    });
});
