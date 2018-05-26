import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchClubs } from '../../store/club/actions';

// Components
import ClubsList from '../../components/lists/ClubsList';

// Selectors
import { getClubs } from '../../store/club/selectors';
import { getClubId } from '../../store/user/selectors';

class ClubsListContainer extends Component {
    componentDidMount() {
        this.props.fetchClubs();
    }

    render() {
        const { clubId, clubs } = this.props;

        return (
            <ClubsList
                clubId={clubId}
                clubs={clubs}
            />
        );
    }
}

ClubsListContainer.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired,
    fetchClubs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clubId: getClubId(state),
    clubs: getClubs(state)
});

const mapDispatchToProps = dispatch => ({
    fetchClubs: () => dispatch(fetchClubs())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubsListContainer);
