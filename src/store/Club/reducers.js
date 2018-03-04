import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

const ids = handleActions({
    [actions.fetchClubsSuccess]: (state, action) => action.payload.result
}, []);

const isFetching = handleActions({
    [actions.fetchClubsRequest]: () => true,
    [combineActions(
        actions.fetchClubsFailure,
        actions.fetchClubsSuccess,
    )]: () => false
}, false);

const reducers = combineReducers({ids, isFetching});

export default reducers;
