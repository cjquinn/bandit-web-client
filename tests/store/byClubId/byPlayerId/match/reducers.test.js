// Actions
import * as actions from '../../../../../src/store/byClubId/byPlayerId/match/actions';

// Reducers
import reducers from '../../../../../src/store/byClubId/byPlayerId/match/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            didError: false,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchMatches', () => {
    it(actions.fetchMatchesRequest.toString(), () => {
        const state = {
            didError: true,
            ids: [],
            isFetching: false,
            page: 1
        };

        const expected = {
            didError: false,
            ids: [],
            isFetching: true,
            page: 1
        };

        expect(reducers(state, actions.fetchMatchesRequest())).toEqual(expected);
    });

    it(actions.fetchMatchesFailure.toString(), () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: true,
            page: 1
        };

        const expected = {
            didError: true,
            ids: [],
            isFetching: false,
            page: 1
        };

        expect(reducers(state, actions.fetchMatchesFailure())).toEqual(expected);
    });

    it(actions.fetchMatchesSuccess.toString(), () => {
        const state = {
            didError: true,
            ids: [4, 5],
            isFetching: true,
            page: 1
        };

        const payload = {
            page: 1,
            result: [1, 2, 3]
        };

        const expected = {
            didError: false,
            ids: [1, 2, 3],
            isFetching: false,
            page: 1
        };

        expect(reducers(state, actions.fetchMatchesSuccess(payload))).toEqual(expected);
    });
});

describe('fetchMoreMatches', () => {
    it(actions.fetchMatchesSuccess.toString(), () => {
        const state = {
            didError: true,
            ids: [1, 2],
            isFetching: true,
            page: 1
        };

        const payload = {
            page: 2,
            result: [3, 4]
        };

        const expected = {
            didError: false,
            ids: [1, 2, 3, 4],
            isFetching: false,
            page: 2
        };

        expect(reducers(state, actions.fetchMatchesSuccess(payload))).toEqual(expected);
    });
});
