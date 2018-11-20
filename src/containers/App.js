import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Actions
import { fetchCurrentUser } from '../store/user/actions';

// Containers
import ScrollToTop from './ScrollToTop';

// Layouts
import AppLayout from '../layouts/AppLayout';

// Selectors
import { getIsAuthenticated, getIsLoading } from '../store/user/selectors';

class App extends Component {
    componentDidMount() {
        // TODO: Do a better job of handling this
        this.props.fetchCurrentUser();
    }
    
    render() {
        const { history, isAuthenticated, isLoading } = this.props;

        return (
            <ConnectedRouter history={history}>
                <ScrollToTop>
                    <AppLayout isAuthenticated={isAuthenticated} isLoading={isLoading} />
                </ScrollToTop>
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    fetchCurrentUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
