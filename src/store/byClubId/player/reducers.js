import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeFetchReducers } from '../../shared/reducers';

const orderBy = handleAction(
    actions.orderPlayersBy,
    (state, { payload }) => payload.orderBy,
    'a-z'
);

const reducers = combineReducers({
    orderBy,
    ...makeFetchReducers(
        actions.fetchPlayersRequest,
        actions.fetchPlayersFailure,
        actions.fetchPlayersSuccess
    )
});

export default reducers;
