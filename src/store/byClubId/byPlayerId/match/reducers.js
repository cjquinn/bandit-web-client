import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../../shared/reducers';

const ids = handleActions(
    {
        [actions.addMatchSuccess]: (state, { payload }) => ([
            payload.result,
            ...state
        ]),
        [actions.deleteMatchSuccess]: (state, { payload }) => state.filter(
            id => id !== payload.matchId
        ),
        [actions.fetchMatchesSuccess]: (state, { payload }) => payload.page === 1
            ? payload.result
            : [...state, ...payload.result]
    },
    []
);

const isFetching = makeIsFetchingReducer(
    actions.fetchMatchesRequest,
    actions.fetchMatchesFailure,
    actions.fetchMatchesSuccess
);

const page = handleAction(
    actions.fetchMatchesSuccess,
    (state, { payload }) => payload.page,
    1
);

const total = handleActions(
    {
        [actions.addMatchSuccess]: state => state + 1,
        [actions.deleteMatchSuccess]: state => state - 1,
        [actions.fetchMatchesSuccess]: (state, { payload }) => payload.total
    },
    0
);

const reducers = combineReducers({
    ids,
    isFetching,
    page,
    total
});

export default reducers;
