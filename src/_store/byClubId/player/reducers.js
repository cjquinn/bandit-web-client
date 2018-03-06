import { combineReducers } from 'redux';
import { combineActions, handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

const didError = handleActions(
    {
        [actions.fetchPlayersFailure]: () => true,
        [combineActions(
            actions.fetchPlayersRequest,
            actions.fetchPlayersSuccess,
        )]: () => false
    },
    false
);

const ids = handleAction(
    actions.fetchPlayersSuccess,
    (state, { payload }) => payload.result,
    []
);

const isFetching = handleActions(
    {
        [actions.fetchPlayersRequest]: () => true,
        [combineActions(
            actions.fetchPlayersFailure,
            actions.fetchPlayersSuccess,
        )]: () => false
    },
    false
);

const orderBy = handleAction(
    actions.orderPlayersBy,
    (state, { payload }) => payload.orderBy,
    'a-z'
);

const reducers = combineReducers({didError, ids, isFetching, orderBy});

export default reducers;
