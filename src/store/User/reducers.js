import { combineReducers } from 'redux';
import { combineActions, handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

const id = handleAction(
    combineActions(
        actions.activateAccountSuccess,
        actions.fetchCurrentUserSuccess,
        actions.signInSuccess
    ),
    (state, { payload }) => payload.result,
    null
);

const isLoading = handleActions(
    {
        [actions.fetchCurrentUserRequest]: () => true,
        [combineActions(
            actions.fetchCurrentUserFailure,
            actions.fetchCurrentUserSuccess,
        )]: () => false
    },
    false
);

const reducers = combineReducers({id, isLoading});

export default reducers;
