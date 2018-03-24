import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeFetchReducers } from '../../../shared/reducers';

const ids = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.page === 1
        ? payload.result
        : [...state, ...payload.result],
    []
);

const page = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.page,
    1
);

const { didError, isFetching } = makeFetchReducers(
    actions.fetchMatchesRequest,
    actions.fetchMatchesFailure,
    actions.fetchMatchesSuccess
);

const reducers = combineReducers({
    didError,
    ids,
    isFetching,
    page
});

export default reducers;
