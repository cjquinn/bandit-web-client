import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

// Containers
import App from './App';

class Root extends Component {
    render() {
        const { history, store } = this.props;

        return (
            <Provider store={store}>
                <App history={history} />
            </Provider>
        );
    }
}

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default hot(module)(Root);
