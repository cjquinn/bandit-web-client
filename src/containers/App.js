import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';

// Layouts
import AppLayout from '../layouts/AppLayout';

class App extends Component {
    render() {
        const { history } = this.props;

        return (
            <ConnectedRouter history={history}>
                <AppLayout />
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default App;
