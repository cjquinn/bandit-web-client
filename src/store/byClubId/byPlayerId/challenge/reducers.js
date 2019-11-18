import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

// Actions
import * as actions from './actions';
import { addMatchSuccess } from '../match/actions';

// Selectors
import { initialState } from './selectors';

const makeIsFetchingReducer = filter => handleActions(
    {
        [actions.fetchChallengesRequest]: (state, { payload }) =>
            payload.filter === filter
                ? true
                : state,
        [combineActions(actions.fetchChallengesFailure, actions.fetchChallengesSuccess)]: (state, { payload }) =>
            payload.filter === filter
                ? false
                : state,
    },
    false
);

const makeFetchChallengesSuccessReducer = filter => (state, { payload }) =>
    payload.filter === filter
        ? payload.result
        : state;

const addMatchSuccessReducer = (state, { payload }) => {
    const challenge = payload.entities && payload.entities.matches && payload.entities.matches[payload.result].challenge;

    if (!challenge) {
        return state;
    }

    return state.filter(id => id !== challenge.id);
};

const accepted = (state = initialState, action) => {
    const ids = handleActions(
        {
            [actions.acceptChallengeSuccess]: (state, { payload }) => [...state, payload.result],
            [addMatchSuccess]: addMatchSuccessReducer,
            [combineActions(actions.deleteChallengeSuccess, actions.reportChallengeSuccess, actions.withdrawChallengeSuccess)]: (state, { payload }) =>
                state.filter(id => id !== payload.result),
            [actions.fetchChallengesSuccess]: makeFetchChallengesSuccessReducer('accepted')
        },
        initialState.ids
    );

    const isFetching = makeIsFetchingReducer('accepted');


    const filterReducers = combineReducers({
        ids,
        isFetching
    });

    return filterReducers(state, action);
};

const all = (state = initialState, action) => {
    const ids = handleActions(
        {
            [addMatchSuccess]: addMatchSuccessReducer,
            [combineActions(actions.deleteChallengeSuccess, actions.reportChallengeSuccess, actions.withdrawChallengeSuccess)]: (state, { payload }) =>
                state.filter(id => id !== payload.result),
            [actions.fetchChallengesSuccess]: makeFetchChallengesSuccessReducer('all')
        },
        initialState.ids
    );

    const isFetching = makeIsFetchingReducer('all');


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
            [actions.fetchChallengesSuccess]: makeFetchChallengesSuccessReducer('open'),
            [actions.withdrawChallengeSuccess]: (state, { payload }) =>
                payload.playerId === payload.entities.challenges[payload.result].player_a_id
                    ? [...state, payload.result]
                    : state
        },
        initialState.ids
    );

    const isFetching = makeIsFetchingReducer('open');

    const filterReducers = combineReducers({
        ids,
        isFetching
    });

    return filterReducers(state, action);
};

const reducers = combineReducers({
    accepted,
    all,
    open
});

export default reducers;
