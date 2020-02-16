import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router'

// Actions
import { SIGN_OUT } from './user/actions';

// Reducers
import byClubId from './byClubId/reducers';
import club from './club/reducers';
import entities from './entities/reducers';
import flash from './flash/reducers';
import user from './user/reducers';

const createRootReducer = history => (state, action) => {
    if (action.type === SIGN_OUT) {
        // Only undefine state from this app
        state.byClubId = undefined;
        state.club = undefined;
        state.entities = undefined;
        state.flash = undefined;
        state.user = {isLoading: false};
    }

    return combineReducers({
        byClubId,
        club,
        flash,
        form,
        entities,
        router: connectRouter(history),
        user
    })(state, action);
};

export default createRootReducer;
