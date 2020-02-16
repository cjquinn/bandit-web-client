import { ConnectedRouter } from 'connected-react-router'
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Containers
import App from './App';

// Store
import { getClubId } from '../store/api';
import configureStore, { history } from '../store/configureStore';

const store = configureStore({user: {clubId: getClubId()}});

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Root;
