import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchClubs, switchClub } from '../../store/club/actions';

// Components
import ClubsList from '../../components/lists/ClubsList';

// Selectors
import { getClubs, getIsFetching } from '../../store/club/selectors';
import { getClubId } from '../../store/shared/selectors';

class ClubsListContainer extends Component {
    componentDidMount() {
        this.props.fetchClubs();
    }

    handleClick = clubId => this.props.switchClub(clubId);

    render() {
        const { clubId, clubs, isFetching } = this.props;

        return (
            <ClubsList
                clubId={clubId}
                clubs={clubs}
                handleClick={this.handleClick}
                isFetching={isFetching}
            />
        );
    }
}

ClubsListContainer.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired,
    fetchClubs: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    switchClub: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clubId: getClubId(state),
    clubs: getClubs(state),
    isFetching: getIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    fetchClubs: () => dispatch(fetchClubs()),
    switchClub: clubId => dispatch(switchClub(clubId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubsListContainer);
