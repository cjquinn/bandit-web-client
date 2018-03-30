import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../shared/reducers';

const ids = handleActions(
    {
        [actions.addDisputeSuccess]: (state, { payload }) => ([
            payload.result,
            ...state
        ]),
        [actions.deleteDisputeSuccess]: (state, { payload }) => state.filter(
            id => id !== payload.result
        ),
        [actions.fetchDisputesSuccess]: (state, { payload }) => payload.result
    },
    []
);

const isFetching = makeIsFetchingReducer(
    actions.fetchDisputesRequest,
    actions.fetchDisputesFailure,
    actions.fetchDisputesSuccess
);

const reducers = combineReducers({
    ids,
    isFetching
});

export default reducers;
