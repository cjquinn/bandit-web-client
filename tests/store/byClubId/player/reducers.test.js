// Actions
import * as actions from '../../../../src/store/byClubId/player/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/player/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
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
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        const expected = {
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersRequest())).toEqual(expected);
    });

    it(actions.fetchPlayersFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        const expected = {
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersFailure())).toEqual(expected);
    });

    it(actions.fetchPlayersSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            orderBy: 'a-z'
        };

        const payload = {
            result: [1, 2, 3]
        };

        const expected = {
            ids: [1, 2, 3],
            isFetching: false,
            orderBy: 'a-z'
        };

        expect(reducers(state, actions.fetchPlayersSuccess(payload))).toEqual(expected);
    });
});

describe('orderPlayersBy', () => {
    it(actions.ORDER_PLAYERS_BY, () => {
        const state = {
            ids: [],
            isFetching: false,
            orderBy: 'a-z'
        };

        const payload = {
            orderBy: 'rating'
        };

        const expected = {
            ids: [],
            isFetching: false,
            orderBy: 'rating'
        };

        expect(reducers(state, {type: actions.ORDER_PLAYERS_BY, payload})).toEqual(expected);
    });
});
