import { combineReducers } from 'redux';
import { combineActions, handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

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

const clubPlayersReducers = combineReducers({ids, isFetching, orderBy});

const byClubId = handleAction(
    combineActions(
        actions.fetchPlayersRequest,
        actions.fetchPlayersFailure,
        actions.fetchPlayersSuccess,
        actions.orderPlayersBy
    ),
    (state, action) => ({
        ...state,
        [action.payload.clubId]: clubPlayersReducers(state[action.payload.clubId], action)
    }),
    {}
);

const reducers = combineReducers({byClubId});

export default reducers;
