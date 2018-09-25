import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

// Actions
import { SIGN_OUT } from './user/actions';

// Reducers
import byClubId from './byClubId/reducers';
import club from './club/reducers';
import entities from './entities/reducers';
import flash from './flash/reducers';
import user from './user/reducers';

const appReducers = combineReducers({
    byClubId,
    club,
    flash,
    form,
    entities,
    router,
    user
});

const reducers = (state, action) => {
    if (action.type === SIGN_OUT) {
        // Only undefine state from this app
        state.byClubId = undefined;
        state.club = undefined;
        state.entities = undefined;
        state.flash = undefined;
        state.user = {isLoading: false};
    }

    return appReducers(state, action);
};

export default reducers;
