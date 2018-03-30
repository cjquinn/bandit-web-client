import { handleActions } from 'redux-actions';

// Actions
import { addDisputeSuccess, deleteDisputeSuccess } from '../../byClubId/dispute/actions';

// Utilities
import { mergeEntities } from './utilities';

const matchesReducers = handleActions(
    {
        [addDisputeSuccess]: (state, { payload }) => ({
            ...state,
            [payload.result]: {
                ...state[payload.result],
                dispute: payload.result
            }
        }),
        [deleteDisputeSuccess]: (state, { payload }) => ({
            ...state,
            [payload.result]: {
                ...state[payload.result],
                dispute: null
            }
        })
    },
    {}
);

const reducers = (state = {}, action) =>
    mergeEntities('matches')(matchesReducers(state, action), action);

export default reducers;
