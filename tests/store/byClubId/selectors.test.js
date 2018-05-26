// Api
import { setClubId } from '../../../src/store/api';

// Selectors
import { getByClubIdState } from '../../../src/store/byClubId/selectors';

setClubId({data: {club: {id: 1}}});

describe('selectors', () => {
    it('getByClubIdState', () => {
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
                    },
                    player: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        orderBy: 'a-z'
                    }
                }
            }
        };

        const expected = {
            byPlayerId: {
                1: {
                    match: {
                        didError: false,
                        ids: [],
                        isFetching: false,
                        page: 1
                    }
                }
            },
            player: {
                didError: false,
                ids: [],
                isFetching: false,
                orderBy: 'a-z'
            }
        };

        expect(getByClubIdState(state)).toEqual(expected);
    });
});
