import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

const current = handleActions({
    [combineActions(
        actions.activateAccountSuccess,
        actions.fetchCurrentUserSuccess,
        actions.signInSuccess,
        actions.updateSettingsSuccess
    )]: (state, { payload }) => payload
}, null);

const isLoading = handleActions({
    [actions.fetchCurrentUserRequest]: () => true,
    [combineActions(
        actions.fetchCurrentUserFailure,
        actions.fetchCurrentUserSuccess,
    )]: () => false
}, false);

const reducers = combineReducers({current, isLoading});

export default reducers;
