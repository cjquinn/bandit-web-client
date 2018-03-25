import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeFetchReducers } from '../../../shared/reducers';

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

const { didError, isFetching } = makeFetchReducers(
    actions.fetchMatchesRequest,
    actions.fetchMatchesFailure,
    actions.fetchMatchesSuccess
);

const reducers = combineReducers({
    didError,
    ids,
    isFetching,
    page,
    total
});

export default reducers;
