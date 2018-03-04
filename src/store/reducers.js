import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

// Actions
import { SIGN_OUT } from './User/actions';

// Reducers
import club from './Club/reducers';
import entities from './entities/reducers';
import user from './User/reducers';

const app = combineReducers({
    club,
    form,
    entities,
    router,
    user
});

const reducers = (state, action) => {
    if (action.type === SIGN_OUT) {
        // Only undefine state from this app
        state.club = undefined;
        state.entities = undefined;
        state.user = undefined;
    }

    return app(state, action);
};

export default reducers;
