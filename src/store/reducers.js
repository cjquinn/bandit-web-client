import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Api
import { removeJwt } from './api';

// Actions
import { signOut } from './User/actions';

const app = combineReducers({
    form
});

const reducers = (state, action) => {
    if (action.type === signOut.toString()) {
        removeJwt();

        // Only undefine state from this app
    }

    return app(state, action);
};

export default reducers;
