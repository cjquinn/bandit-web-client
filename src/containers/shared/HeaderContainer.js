import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../../components/shared/Header';

// Selectors
import { getCurrentUser } from '../../store/user/selectors';

class HeaderContainer extends Component {
    render() {
        const { children, currentUser } = this.props;

        return (
            <Header currentUser={currentUser}>
                {children}
            </Header>
        );
    }
}

HeaderContainer.propTypes = {
    children: PropTypes.node.isRequired,
    currentUser: PropTypes.object
};

const mapStateToProps = state => ({
    currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HeaderContainer);
