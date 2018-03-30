// Actions
import * as actions from '../../../src/store/club/actions';

// Reducers
import reducers from '../../../src/store/club/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('createClub', () => {
    it(actions.createClubSuccess.toString(), () => {
        const state = {
            ids: [1, 2],
            isFetching: false
        };

        const payload  = {result: 3};

        const expected = {
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.createClubSuccess(payload))).toEqual(expected);
    });
});

describe('fetchClub', () => {
    it(actions.fetchClubSuccess.toString(), () => {
        const state = {
            ids: [1, 2],
            isFetching: false
        };

        const payload  = {result: 3};

        const expected = {
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.fetchClubSuccess(payload))).toEqual(expected);
    });
});

describe('fetchClubs', () => {
    it(actions.fetchClubsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false
        };

        const expected = {
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchClubsRequest())).toEqual(expected);
    });

    it(actions.fetchClubsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchClubsFailure())).toEqual(expected);
    });

    it(actions.fetchClubsSuccess.toString(), () => {
        const state = {
            ids: [1, 2],
            isFetching: true
        };

        const payload = {
            result: [1, 2, 3]
        };

        const expected = {
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.fetchClubsSuccess(payload))).toEqual(expected);
    });
});
