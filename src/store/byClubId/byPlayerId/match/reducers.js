import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../../shared/reducers';

// Selectors
import { initialState } from './selectors';

const ids = handleActions(
    {
        [actions.addMatchSuccess]: (state, { payload }) => [payload.result, ...state],
        [actions.deleteMatchSuccess]: (state, { payload }) => state.filter(id => id !== payload.result),
        [actions.fetchMatchesSuccess]: (state, { payload }) =>
            payload.page === 1
                ? payload.result
                : [...state, ...payload.result],
    },
    initialState.ids
);

const isFetching = makeIsFetchingReducer(
    actions.fetchMatchesRequest,
    actions.fetchMatchesFailure,
    actions.fetchMatchesSuccess
);

const page = handleActions(
    {
        [actions.addMatchSuccess]: () => undefined,
        [actions.deleteMatchSuccess]: () => undefined,
        [actions.fetchMatchesSuccess]: (state, { payload }) => payload.page,
    },
    initialState.page
);

const total = handleActions(
    {
        [actions.addMatchSuccess]: state => state + 1,
        [actions.deleteMatchSuccess]: state => state - 1,
        [actions.fetchMatchesSuccess]: (state, { payload }) => payload.total,
    },
    initialState.total
);

const reducers = combineReducers({
    ids,
    isFetching,
    page,
    total
});

export default reducers;
