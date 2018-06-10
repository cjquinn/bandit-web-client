// Actions
import * as actions from '../../../../../src/store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../../src/store/byClubId/byPlayerId/match/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchMatches', () => {
    it(actions.fetchMatchesRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [],
            isFetching: true,
            page: 1,
            total: 0
        };

        expect(reducers(state, actions.fetchMatchesRequest())).toEqual(expected);
    });

    it(actions.fetchMatchesFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        expect(reducers(state, actions.fetchMatchesFailure())).toEqual(expected);
    });

    it(actions.fetchMatchesSuccess.toString(), () => {
        const state = {
            ids: [4, 5],
            isFetching: true,
            page: 1,
            total: 50
        };

        const payload = {
            page: 1,
            result: [1, 2, 3],
            total: 40
        };

        const expected = {
            ids: [1, 2, 3],
            isFetching: false,
            page: 1,
            total: 40
        };

        expect(reducers(state, actions.fetchMatchesSuccess(payload))).toEqual(expected);
    });
});

describe('fetchMoreMatches', () => {
    it(actions.fetchMatchesSuccess.toString(), () => {
        const state = {
            ids: [1, 2],
            isFetching: true,
            page: 1,
            total: 50
        };

        const payload = {
            page: 2,
            result: [3, 4],
            total: 40
        };

        const expected = {
            ids: [1, 2, 3, 4],
            isFetching: false,
            page: 2,
            total: 40
        };

        expect(reducers(state, actions.fetchMatchesSuccess(payload))).toEqual(expected);
    });
});
