import { combineReducers } from 'redux';

import player from './player/reducers';

const clubReducers = combineReducers({
    player
});

const reducers = (state = {}, action) =>
    action.payload && action.payload.clubId
        ? {
            ...state,
            [action.payload.clubId]: clubReducers(state[action.payload.clubId], action)
        }
        : state;

export default reducers;
