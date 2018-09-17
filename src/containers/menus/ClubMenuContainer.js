import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ClubMenu from '../../components/menus/ClubMenu';

// Selectors
import { getIsClubOwner } from '../../store/user/selectors';

class ClubMenuContainer extends Component {
    render() {
        const { isClubOwner } = this.props;

        return <ClubMenu isClubOwner={isClubOwner} />;
    }
}

ClubMenuContainer.propTypes = {
    isClubOwner: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isClubOwner: getIsClubOwner(state)
});

export default connect(mapStateToProps)(ClubMenuContainer);
