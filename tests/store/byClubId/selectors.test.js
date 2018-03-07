import { getPlayerByClubId } from '../../../src/store/byClubId/selectors';

describe('selectors', () => {
    it('getPlayerByClubId', () => {
        let state = {
            byClubId: {
                1: {
                    player: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        orderBy: 'a-z'
                    }
                }
            }
        };

        const props = {match: {params: {clubId: 1}}};

        const expected = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'   
        }

        expect(getPlayerByClubId(state, props)).toEqual(expected);
    });
});
