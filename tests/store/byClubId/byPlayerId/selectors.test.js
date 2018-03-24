import { getMatchByPlayerId } from '../../../../src/store/byClubId/byPlayerId/selectors';

describe('selectors', () => {
    it('getMatchByPlayerId', () => {
        let state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                didError: false,
                                ids: [],
                                isFetching: false,
                                page: 1
                            }
                        }
                    }
                }
            }
        };

        const props = {match: {params: {clubId: 1, playerId: 1}}};

        const expected = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(getMatchByPlayerId(state, props)).toEqual(expected);
    });
});
