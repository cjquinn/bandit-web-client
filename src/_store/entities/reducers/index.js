import { combineReducers } from 'redux';

// Utilities
import { mergeEntities } from './utilities';

const reducers = combineReducers({
    clubs: mergeEntities('clubs'),
    disputes: mergeEntities('disputes'),
    matches: mergeEntities('matches'),
    players: mergeEntities('players'),
    snapshots: mergeEntities('snapshots'),
    users: mergeEntities('users')
});

export default reducers;
