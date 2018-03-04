import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Actions
import { SIGN_OUT } from './User/actions';

const app = combineReducers({
    form
});

const reducers = (state, action) => {
    if (action.type === SIGN_OUT) {
        // Only undefine state from this app
    }

    return app(state, action);
};

export default reducers;
