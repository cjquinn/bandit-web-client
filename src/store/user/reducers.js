import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';
import { createClubSuccess, fetchClubSuccess } from '../club/actions';

const clubId = handleActions(
    {
        [combineActions(
            actions.fetchCurrentUserSuccess,
            actions.signInSuccess,
            actions.signUpSuccess
        )]: (state, { payload }) => {
            if (state) {
                return state;
            }

            const playerIds = Object.keys(payload.entities.players);

            if (playerIds.length === 0) {
                return null;
            }

            return payload.entities.players[playerIds[0]].club_id;
        },
        [combineActions(
            createClubSuccess,
            fetchClubSuccess
        )]: (state, { payload }) => payload.result
    },
    null
);

const id = handleActions(
    {
        [combineActions(
            actions.fetchCurrentUserSuccess,
            actions.signInSuccess,
            actions.signUpSuccess
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

const reducers = combineReducers({clubId, id, isLoading});

export default reducers;
