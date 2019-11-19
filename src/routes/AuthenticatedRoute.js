import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Selectors
import { getClubId } from '../store/shared/selectors';
import { getIsAuthenticated, getUser } from '../store/user/selectors';

class AuthenticatedRoute extends Component {
    render() {
        const { clubId, component: Component, isAuthenticated, isClubRoute, user, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? !isClubRoute || clubId
                            ? <Component {...props} user={user} />
                            : <Redirect to="/clubs" />
                        : <Redirect to="/sign-in" />
                }
            />
        );
    }
}

AuthenticatedRoute.propTypes = {
    clubId: PropTypes.number,
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isClubRoute: PropTypes.bool,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    clubId: getClubId(state),
    isAuthenticated: getIsAuthenticated(state),
    user: getUser(state)
});

export default connect(mapStateToProps)(AuthenticatedRoute);
