import { combineReducers } from 'redux';

// Reducers
import challenge from './challenge/reducers';
import match from './match/reducers';

const playerReducers = combineReducers({challenge, match});

const reducers = (state = {}, action) => {
    if (!action.payload ||
        !action.payload.playerId
    ) {
        return state;
    }

    let playerId = action.payload.playerId;

    if (!Array.isArray(playerId)) {
        playerId = [playerId];
    }

    return {
        ...state,
        ...playerId.reduce((playersState, id) => {
            playersState[id] = playerReducers(state[id], action);

            return playersState;
        }, {})
    };
};

export default reducers;
