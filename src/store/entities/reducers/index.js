import { combineReducers } from 'redux';

// Reducers
import matches from './matches';

// Utilities
import { mergeEntities } from './utilities';

const reducers = combineReducers({
    challenges: mergeEntities('challenges'),
    clubs: mergeEntities('clubs'),
    disputes: mergeEntities('disputes'),
    matches,
    players: mergeEntities('players'),
    users: mergeEntities('users')
});

export default reducers;
