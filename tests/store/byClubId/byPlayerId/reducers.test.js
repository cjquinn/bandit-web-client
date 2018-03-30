// Reducers
import reducers from '../../../../src/store/byClubId/byPlayerId/reducers';

describe('byPlayerId', () => {
    it('shape', () => {
        const payload = {playerId: 1};

        const expected = {
            1: {
                match: {
                    ids: [],
                    isFetching: false,
                    page: 1,
                    total: 0
                }
            }
        };

        expect(reducers(undefined, {type: 'ANY_OLD_TYPE', payload})).toEqual(expected);
    });
});
