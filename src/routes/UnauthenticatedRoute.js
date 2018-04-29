import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Selectors
import { getIsAuthenticated } from '../store/user/selectors';

class UnauthenticatedRoute extends Component {
    render() {
        const { component: Component, isAuthenticated, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    !isAuthenticated
                        ? <Component {...props} />
                        : <Redirect to="/" />
                }
            />
        );
    }
}

UnauthenticatedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
