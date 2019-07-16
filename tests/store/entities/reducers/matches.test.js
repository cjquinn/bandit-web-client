// Actions
import { addDisputeSuccess, deleteDisputeSuccess } from '../../../../src/store/byClubId/dispute/actions';

// Reducers
import reducers from '../../../../src/store/entities/reducers/matches';

describe('addDispute', () => {
    it(addDisputeSuccess.toString(), () => {
        const state = {
            1: {
                id: 1
            }
        };

        const expected = {
            1: {
                id: 1,
                dispute: 1
            }
        };

        const payload = {
            result: 1
        };

        expect(reducers(state, addDisputeSuccess(payload))).toEqual(expected);
    });
});

describe('deleteDispute', () => {
    it(deleteDisputeSuccess.toString(), () => {
        let state = {
            1: {
                id: 1,
                dispute: 1
            }
        };

        let expected = {
            1: {
                id: 1,
                dispute: null
            }
        };

        let payload = {
            result: 1
        };

        expect(reducers(state, deleteDisputeSuccess(payload))).toEqual(expected);
    });
});
