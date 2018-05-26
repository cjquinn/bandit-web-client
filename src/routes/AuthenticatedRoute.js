import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Api
import { getClubId } from '../store/api';

// Selectors
import { getIsAuthenticated } from '../store/user/selectors';

class AuthenticatedRoute extends Component {
    render() {
        const { isClubRoute, component: Component, isAuthenticated, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? !isClubRoute || getClubId()
                            ? <Component {...props} />
                            : <Redirect to="/clubs" />
                        : <Redirect to="/sign-in" />
                }
            />
        );
    }
}

AuthenticatedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isClubRoute: PropTypes.bool,
    component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(AuthenticatedRoute);
