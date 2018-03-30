import { combineReducers } from 'redux';
import { combineActions, handleAction, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Selectors
import { initialState } from './selectors';

const makeLeaderboardReducers = period => {
    const ids = handleAction(
        actions.fetchLeaderboardSuccess,
        (state, { payload }) => payload.period === period ? payload.result : state,
        initialState.ids
    );

    const isFetching = handleActions(
        {
            [actions.fetchLeaderboardRequest]: (state, { payload }) =>
                payload.period === period ? true : state,
            [combineActions(
                actions.fetchLeaderboardFailure,
                actions.fetchLeaderboardSuccess
            )]: (state, { payload }) =>
                payload.period === period ? false : state
        },
        initialState.isFetching
    );

    return combineReducers({
        ids,
        isFetching
    });
};

const allTime = makeLeaderboardReducers('allTime');
const weekly = makeLeaderboardReducers('weekly');

const reducers = combineReducers({
    allTime,
    weekly
});

export default reducers;
