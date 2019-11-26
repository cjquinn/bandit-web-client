import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route as ReactRoute } from 'react-router-dom';

// Selectors
import { getIsAuthenticated } from '../store/user/selectors';

class Route extends Component {
    render() {
        const { component: Component, isAuthenticated, ...props } = this.props;

        return (
            <ReactRoute
                {...props}
                render={props => <Component {...props} isAuthenticated={isAuthenticated} />}
            />
        );
    }
}

Route.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Route);
