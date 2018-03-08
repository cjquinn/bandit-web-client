import { combineActions, handleAction, handleActions } from 'redux-actions';

export const makeFetchReducers = (request, failure, success) => {
    const didError = handleActions(
        {
            [failure]: () => true,
            [combineActions(request, success)]: () => false
        },
        false
    );

    const ids = handleAction(success, (state, { payload }) => payload.result, []);

    const isFetching = handleActions(
        {
            [request]: () => true,
            [combineActions(failure, success)]: () => false
        },
        false
    );

    return {didError, isFetching, ids};
};
