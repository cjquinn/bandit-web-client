import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import {
    applyMiddleware,
    compose,
    createStore } from 'redux';
import thunk from 'redux-thunk';

import * as api from './api';
import createRootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const configureStore = initialState => createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument(api),
            routerMiddleware(history)
        )
    )
);

export default configureStore;
