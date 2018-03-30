// Actions
import * as actions from '../../../../src/store/byClubId/dispute/actions';

// Reducers
import reducers from '../../../../src/store/byClubId/dispute/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('addDispute', () => {
    it(actions.addDisputeSuccess.toString(), () => {
        const state = {
            ids: [2, 3],
            isFetching: false
        };

        const payload = {
            result: 1
        };

        const expected = {
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.addDisputeSuccess(payload))).toEqual(expected);
    });
});

describe('deleteDispute', () => {
    it(actions.deleteDisputeSuccess.toString(), () => {
        const state = {
            ids: [2, 3],
            isFetching: false
        };

        const payload = {
            result: 2
        };

        const expected = {
            ids: [3],
            isFetching: false
        };

        expect(reducers(state, actions.deleteDisputeSuccess(payload))).toEqual(expected);
    });
});

describe('fetchDisputes', () => {
    it(actions.fetchDisputesRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false
        };

        const expected = {
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchDisputesRequest())).toEqual(expected);
    });

    it(actions.fetchDisputesFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchDisputesFailure())).toEqual(expected);
    });

    it(actions.fetchDisputesSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const payload = {
            result: [1, 2, 3]
        };

        const expected = {
            ids: [1, 2, 3],
            isFetching: false
        };

        expect(reducers(state, actions.fetchDisputesSuccess(payload))).toEqual(expected);
    });
});
