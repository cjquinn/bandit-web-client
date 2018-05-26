import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../../components/shared/Header';

// Selectors
import { getClub } from '../../store/club/selectors';
import { getUser } from '../../store/user/selectors';

class HeaderContainer extends Component {
    render() {
        const { children, club, user } = this.props;

        return (
            <Header club={club} user={user}>
                {children}
            </Header>
        );
    }
}

HeaderContainer.propTypes = {
    children: PropTypes.node.isRequired,
    club: PropTypes.object,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    club: getClub(state),
    user: getUser(state)
});

export default connect(mapStateToProps)(HeaderContainer);
