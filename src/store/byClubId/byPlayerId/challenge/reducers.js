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

    let filter = action.payload.filter;

    if (!Array.isArray(filter)) {
        filter = [filter];
    }

    return {
        ...state,
        ...filter.reduce((filtersState, f) => {
            filtersState[f] = challengeReducers(state[f], action);

            return filtersState;
        }, {})
    };
};

export default reducers;
