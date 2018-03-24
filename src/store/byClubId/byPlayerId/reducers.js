import { combineReducers } from 'redux';

// Reducers
import match from './match/reducers';

const playerReducers = combineReducers({match});

const reducers = (state = {}, action) => {
    if (!action.payload ||
        !action.payload.playerId
    ) {
        return state;
    }

    const playerId = action.payload.playerId;

    return {
        ...state,
        [playerId]: playerReducers(state[playerId], action)
    };
};

export default reducers;
