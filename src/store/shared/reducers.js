import { combineActions, handleActions } from 'redux-actions';

export const makeIsFetchingReducer = (request, failure, success) => handleActions(
    {
        [request]: () => true,
        [combineActions(failure, success)]: () => false
    },
    false
);
