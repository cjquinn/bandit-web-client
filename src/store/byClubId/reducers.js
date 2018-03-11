import { combineReducers } from 'redux';

// Reducers
import match from './match/reducers';
import player from './player/reducers';

const clubReducers = combineReducers({match, player});

const reducers = (state = {}, action) => {
    if (!action.payload ||
        !action.payload.clubId
    ) {
        return state;
    }

    const clubId = action.payload.clubId;

    return {
        ...state,
        [clubId]: clubReducers(state[clubId], action)
    };
};

export default reducers;
