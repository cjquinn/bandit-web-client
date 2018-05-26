import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchClub } from '../../store/club/actions';

// Components
import Header from '../../components/shared/Header';

// Selectors
import { getClub } from '../../store/club/selectors';
import { getUser } from '../../store/user/selectors';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.fetchClub();
    }

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
    fetchClub: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    club: getClub(state),
    user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
    fetchClub: () => dispatch(fetchClub())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
