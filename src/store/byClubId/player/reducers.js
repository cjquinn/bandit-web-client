import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../shared/reducers';

const ids = handleActions(
    {
        [actions.fetchPlayerSuccess]: (state, { payload }) => ([
            ...state,
            payload.result
        ]),
        [actions.fetchPlayersSuccess]: (state, { payload }) => payload.result
    },
    []
);

const isFetching = makeIsFetchingReducer(
    actions.fetchPlayersRequest,
    actions.fetchPlayersFailure,
    actions.fetchPlayersSuccess
);

const orderBy = handleAction(
    actions.orderPlayersBy,
    (state, { payload }) => payload.orderBy,
    'a-z'
);

const reducers = combineReducers({
    ids,
    isFetching,
    orderBy
});

export default reducers;
