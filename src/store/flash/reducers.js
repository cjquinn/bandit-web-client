import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

const message = handleActions(
    {
        [actions.clearFlash]: () => null,
        [actions.setFlash]: (state, { payload }) => payload.message
    },
    null
);

const type = handleActions(
    {
        [actions.clearFlash]: () => null,
        [actions.setFlash]: (state, { payload }) => payload.type
    },
    null
);

const reducers = combineReducers({
    message,
    type
});

export default reducers;
