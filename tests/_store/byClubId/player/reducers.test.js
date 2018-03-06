// Actions
import * as actions from '../../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/player/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchPlayers', () => {
    it(actions.fetchPlayersRequest.toString(), () => {
        const state = {
            didError: true,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        const expected = {
            didError: false,
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersRequest())).toEqual(expected);
    });

    it(actions.fetchPlayersFailure.toString(), () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        const expected = {
            didError: true,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersFailure())).toEqual(expected);
    });

    it(actions.fetchPlayersSuccess.toString(), () => {
        const state = {
            didError: true,
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        const payload = {
            result: [1, 2, 3]
        };

        const expected = {
            didError: false,
            ids: [1, 2, 3],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersSuccess(payload))).toEqual(expected);
    });
});

describe('orderPlayersBy', () => {
    it(actions.orderPlayersBy.toString(), () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        const payload = {
            orderBy: 'rating'
        };

        const expected = {
            didError: false,
            ids: [],
            isFetching: false,
            orderBy: 'rating'
        };

        expect(reducers(state, actions.orderPlayersBy(payload))).toEqual(expected);
    });
});
