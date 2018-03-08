// Actions
import * as actions from '../../../src/store/club/actions';

// Reducers
import reducers from '../../../src/store/club/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            didError: false,
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchClubs', () => {
    it(actions.fetchClubsRequest.toString(), () => {
        const state = {
            didError: true,
            ids: [],
            isFetching: false
        };

        const expected = {
            didError: false,
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchClubsRequest())).toEqual(expected);
    });

    it(actions.fetchClubsFailure.toString(), () => {
        const state = {
            didError: false,
            ids: [],
            isFetching: true
        };

        const expected = {
            didError: true,
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchClubsFailure())).toEqual(expected);
    });

    it(actions.fetchClubsSuccess.toString(), () => {
        const state = {
            didError: true,
            ids: [1, 2],
            isFetching: true
        };

        const payload = {
            result: [1, 2, 3]
        };

        const expected = {
            didError: false,
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.fetchClubsSuccess(payload))).toEqual(expected);
    });
});
