import { combineReducers } from 'redux';

// Reducers
import byPlayerId from './byPlayerId/reducers';
import dispute from './dispute/reducers';
import leaderboard from './leaderboard/reducers';
import player from './player/reducers';

const clubReducers = combineReducers({byPlayerId, dispute, leaderboard, player});

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
