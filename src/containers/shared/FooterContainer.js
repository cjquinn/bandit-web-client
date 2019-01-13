import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { signOut } from '../../store/user/actions';

// Components
import Footer from '../../components/shared/Footer';

// Selectors
import { getIsAuthenticated } from '../../store/user/selectors';

class FooterContainer extends Component {
    render() {
        const { children, isAuthenticated, signOut } = this.props;

        return (
            <Footer
                isAuthenticated={isAuthenticated}
                signOut={signOut}
            >
                {children}
            </Footer>
        );
    }
}

FooterContainer.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
