import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../shared/reducers';

const ids = handleActions(
    {
        [actions.createClubSuccess]: (state, { payload }) => ([
            ...state,
            payload.result
        ]),
        [actions.fetchClubsSuccess]: (state, { payload }) => payload.result
    },
    []
);

const isFetching = makeIsFetchingReducer(
    actions.fetchClubsRequest,
    actions.fetchClubsFailure,
    actions.fetchClubsSuccess
);

const reducers = combineReducers({
    ids,
    isFetching
});

export default reducers;
