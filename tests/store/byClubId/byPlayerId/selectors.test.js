// Api
import { setClubId } from '../../../../src/store/api';

// Selectors
import { getByPlayerIdState } from '../../../../src/store/byClubId/byPlayerId/selectors';

setClubId({data: {club: {id: 1}}});

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
            }
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
            byClubId: {}
        };

        expect(getByPlayerIdState(stateNoByClubId, props)).toEqual(undefined);
    });
});
