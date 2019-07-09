import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

// Actions
import * as actions from './actions';

// Reducers
import { makeIsFetchingReducer } from '../../../shared/reducers';

// Selectors
import { initialState } from './selectors';

const ids = handleAction(
    actions.fetchChallengesSuccess,
    (state, { payload }) => payload.result,
    initialState.ids
);

const isFetching = makeIsFetchingReducer(
    actions.fetchChallengesRequest,
    actions.fetchChallengesFailure,
    actions.fetchChallengesSuccess
);

const challengeReducers = combineReducers({
    ids,
    isFetching
});

const reducers = (state = {}, action) => {
    if (!action.payload ||
        !action.payload.filter
    ) {
        return state;
    }

    const filter = action.payload.filter;

    return {
        ...state,
        [filter]: challengeReducers(state[filter], action)
    };
};

export default reducers;
