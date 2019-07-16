import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';

// Selectors
import { initialState } from './selectors';

const accepted = (state = initialState, action) => {
    const ids = handleActions(
        {
            [actions.acceptChallengeSuccess]: (state, { payload }) => [...state, payload.result],
            [combineActions(actions.deleteChallengeSuccess, actions.reportChallengeSuccess)]: (state, { payload }) =>
                state.filter(id => id !== payload.result),
            [actions.fetchChallengesSuccess]: (state, { payload }) =>
                payload.filter === 'accepted'
                    ? payload.result
                    : state,
            [actions.withdrawChallengeSuccess]: (state, { payload }) =>
                state.filter(id => id !== payload.result)
        },
        initialState.ids
    );

    const isFetching = handleActions(
        {
            [actions.fetchChallengesRequest]: (state, { payload }) =>
                payload.filter === 'accepted'
                    ? true
                    : state,
            [combineActions(actions.fetchChallengesFailure, actions.fetchChallengesSuccess)]: (state, { payload }) =>
                payload.filter === 'accepted'
                    ? false
                    : state,
        },
        false
    );


    const filterReducers = combineReducers({
        ids,
        isFetching
    });

    return filterReducers(state, action);
};

const open = (state = initialState, action) => {
    const ids = handleActions(
        {
            [combineActions(actions.acceptChallengeSuccess, actions.deleteChallengeSuccess, actions.reportChallengeSuccess)]: (state, { payload }) =>
                state.filter(id => id !== payload.result),
            [actions.createChallengeSuccess]: (state, { payload }) => [...state, payload.result],
            [actions.fetchChallengesSuccess]: (state, { payload }) =>
                payload.filter === 'open'
                    ? payload.result
                    : state,
            [actions.withdrawChallengeSuccess]: (state, { payload }) =>
                payload.playerId === payload.entities.challenges[payload.result].player_a_id
                    ? [...state, payload.result]
                    : state
        },
        initialState.ids
    );

    const isFetching = handleActions(
        {
            [actions.fetchChallengesRequest]: (state, { payload }) =>
                payload.filter === 'open'
                    ? true
                    : state,
            [combineActions(actions.fetchChallengesFailure, actions.fetchChallengesSuccess)]: (state, { payload }) =>
                payload.filter === 'open'
                    ? false
                    : state,
        },
        false
    );

    const filterReducers = combineReducers({
        ids,
        isFetching
    });

    return filterReducers(state, action);
};

const reducers = combineReducers({
    accepted,
    open
});

export default reducers;
