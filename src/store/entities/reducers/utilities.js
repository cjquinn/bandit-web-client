import { merge } from 'lodash';

export const mergeEntities = model => (state = {}, action) => {
    if (action.payload &&
        action.payload.entities &&
        action.payload.entities[model]
    ) {
        return merge({}, state, action.payload.entities[model]);
    }

    return state;
};
