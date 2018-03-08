import { combineReducers } from 'redux';

// Actions
import * as actions from './actions';

// Reducers
import { makeFetchReducers } from '../shared/reducers';

const reducers = combineReducers(makeFetchReducers(
    actions.fetchClubsRequest,
    actions.fetchClubsFailure,
    actions.fetchClubsSuccess
));

export default reducers;
