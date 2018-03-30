import { combineReducers } from 'redux';

// Reducers
import matches from './matches';

// Utilities
import { mergeEntities } from './utilities';

const reducers = combineReducers({
    clubs: mergeEntities('clubs'),
    disputes: mergeEntities('disputes'),
    matches,
    players: mergeEntities('players'),
    snapshots: mergeEntities('snapshots'),
    users: mergeEntities('users')
});

export default reducers;
