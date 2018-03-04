import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

// Actions
import { SIGN_OUT } from './User/actions';

// Reducers
import user from './User/reducers';

const app = combineReducers({
    form,
    router,
    user
});

const reducers = (state, action) => {
    if (action.type === SIGN_OUT) {
        // Only undefine state from this app
        state.user = undefined;
    }

    return app(state, action);
};

export default reducers;
