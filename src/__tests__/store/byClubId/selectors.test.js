// Selectors
import { getByClubIdState } from '../../../store/byClubId/selectors';

describe('selectors', () => {
    it('getByClubIdState', () => {
        let state = {
            byClubId: {
                1: {
                    byPlayerId: {
                        1: {
                            match: {
                                ids: [],
                                isFetching: false,
                                page: 1
                            }
                        }
                    },
                    player: {
                        ids: [],
                        isFetching: false,
                        orderBy: 'a-z'
                    }
                }
            },
            user: {clubId: 1}
        };

        const expected = {
            byPlayerId: {
                1: {
                    match: {
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            },
            player: {
                ids: [],
                isFetching: false,
                orderBy: 'a-z'
            }
        };

        expect(getByClubIdState(state)).toEqual(expected);
    });
});
