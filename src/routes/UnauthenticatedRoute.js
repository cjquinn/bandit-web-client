import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Selectors
import { getRedirect } from '../store/router/selectors';
import { getIsAuthenticated } from '../store/user/selectors';

class UnauthenticatedRoute extends Component {
    render() {
        const { component: Component, isAuthenticated, redirect, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    !isAuthenticated
                        ? <Component {...props} />
                        : <Redirect to={redirect || '/'} />
                }
            />
        );
    }
}

UnauthenticatedRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    redirect: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
    redirect: getRedirect(state)
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
