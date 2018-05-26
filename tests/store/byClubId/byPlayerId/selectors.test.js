// Selectors
import { getByPlayerIdState } from '../../../../src/store/byClubId/byPlayerId/selectors';

describe('selectors', () => {
    it('getByPlayerIdState', () => {
        const state = {
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
            },
            user: {clubId: 1}
        };

        const props = {match: {params: {playerId: 1}}};

        const expected = {
            match: {
                didError: false,
                ids: [],
                isFetching: false,
                page: 1
            }
        };

        expect(getByPlayerIdState(state, props)).toEqual(expected);

        const stateNoByClubId = {
            byClubId: {},
            user: {clubId: 1}
        };

        expect(getByPlayerIdState(stateNoByClubId, props)).toEqual(undefined);
    });
});
