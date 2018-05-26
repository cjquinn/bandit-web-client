import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Selectors
import { getClubId, getIsAuthenticated } from '../store/user/selectors';

class AuthenticatedRoute extends Component {
    render() {
        const { clubId, isClubRoute, component: Component, isAuthenticated, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? !isClubRoute || clubId
                            ? <Component {...props} />
                            : <Redirect to="/clubs" />
                        : <Redirect to="/sign-in" />
                }
            />
        );
    }
}

AuthenticatedRoute.propTypes = {
    clubId: PropTypes.number,
    isAuthenticated: PropTypes.bool.isRequired,
    isClubRoute: PropTypes.bool,
    component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clubId: getClubId(state),
    isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(AuthenticatedRoute);
