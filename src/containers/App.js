import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Actions
import { fetchCurrentUser } from '../store/user/actions';

// Layouts
import AppLayout from '../layouts/AppLayout';

// Selectors
import { getIsLoading } from '../store/user/selectors';

class App extends Component {
    componentDidMount() {
        // Do a better job of handling this
        this.props.fetchCurrentUser();
    }
    
    render() {
        const { history, isLoading } = this.props;

        return (
            <ConnectedRouter history={history}>
                <AppLayout isLoading={isLoading} />
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    fetchCurrentUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
