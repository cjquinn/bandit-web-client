import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';
import { createClubSuccess } from '../club/actions';

const id = handleActions(
    {
        [combineActions(
            actions.activateAccountSuccess,
            actions.fetchCurrentUserSuccess,
            actions.signInSuccess
        )]: (state, { payload }) => payload.result,
        [createClubSuccess]: (state, { payload }) => payload.entities.clubs[payload.result].founder_id
    },
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
    true
);

const reducers = combineReducers({id, isLoading});

export default reducers;
