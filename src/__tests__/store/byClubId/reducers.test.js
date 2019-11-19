// Reducers
import reducers from '../../../store/byClubId/reducers';

describe('byClubId', () => {
    it('shape', () => {
        const payload = {clubId: 1};

        const expected = {
            1: {
                byPlayerId: {},
                dispute: {
                    ids: [],
                    isFetching: false
                },
                leaderboard: {
                    allTime: {
                        ids: [],
                        isFetching: false
                    },
                    unranked: {
                        ids: [],
                        isFetching: false
                    },
                    weekly: {
                        ids: [],
                        isFetching: false
                    }
                },
                player: {
                    ids: [],
                    isFetching: false,
                    orderBy: 'a-z'
                }
            }
        };

        expect(reducers(undefined, {type: 'ANY_OLD_TYPE', payload})).toEqual(expected);
    });
});
