import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../../shared/reducers';

// Selectors
import { initialState } from './selectors';

const ids = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.page === 1
        ? payload.result
        : [...state, ...payload.result],
    initialState.ids
);

const isFetching = makeIsFetchingReducer(
    actions.fetchMatchesRequest,
    actions.fetchMatchesFailure,
    actions.fetchMatchesSuccess
);

const page = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.page,
    initialState.page
);

const total = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.total,
    initialState.total
);

const reducers = combineReducers({
    ids,
    isFetching,
    page,
    total
});

export default reducers;
