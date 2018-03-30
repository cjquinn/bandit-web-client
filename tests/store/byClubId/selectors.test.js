import { getByClubIdState } from '../../../src/store/byClubId/selectors';

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

        const props = {match: {params: {clubId: 1}}};

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

        expect(getByClubIdState(state, props)).toEqual(expected);
    });
});
