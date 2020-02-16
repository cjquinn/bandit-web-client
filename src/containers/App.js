import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.fetchCurrentUser();
    }
    
    render() {
        const { isAuthenticated, isLoading } = this.props;

        return (
            <ScrollToTop>
                <AppLayout isAuthenticated={isAuthenticated} isLoading={isLoading} />
            </ScrollToTop>
        );
    }
}

App.propTypes = {
    fetchCurrentUser: PropTypes.func.isRequired,
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
