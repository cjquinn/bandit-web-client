import { combineReducers } from 'redux';
import { combineActions, handleAction, handleActions } from 'redux-actions';

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

const isDeleting = handleActions(
    {
        [actions.deleteMatchRequest]: () => true,
        [combineActions(actions.deleteMatchFailure, actions.deleteMatchSuccess)]: () => false
    },
    false
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
    isDeleting,
    isFetching,
    page,
    total
});

export default reducers;
