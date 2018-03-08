import { combineReducers } from 'redux';

// Reducers
import match from './match/reducers';
import player from './player/reducers';

const clubReducers = combineReducers({match, player});

const reducers = (state = {}, action) =>
    action.payload && action.payload.clubId
        ? {
            ...state,
            [action.payload.clubId]: clubReducers(state[action.payload.clubId], action)
        }
        : state;

export default reducers;
