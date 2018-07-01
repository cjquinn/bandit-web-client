import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../shared/reducers';

// Selectors
import { initialState } from './selectors';

const ids = handleAction(
    actions.fetchPlayersSuccess,
    (state, { payload }) => payload.result,
    initialState.ids
);

const isFetching = makeIsFetchingReducer(
    actions.fetchPlayersRequest,
    actions.fetchPlayersFailure,
    actions.fetchPlayersSuccess
);

const orderBy = handleAction(
    actions.ORDER_PLAYERS_BY,
    (state, { payload }) => payload.orderBy,
    initialState.orderBy
);

const reducers = combineReducers({
    ids,
    isFetching,
    orderBy
});

export default reducers;
