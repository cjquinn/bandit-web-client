import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// Actions
import { fetchClubs } from '../../store/club/actions';
import { setClubId } from '../../store/user/actions';

// Components
import ClubsList from '../../components/lists/ClubsList';

// Selectors
import { getClubs, getIsFetching } from '../../store/club/selectors';
import { getClubId } from '../../store/shared/selectors';

class ClubsListContainer extends Component {
    componentDidMount() {
        this.props.fetchClubs();
    }

    handleClick = clubId => {
        const { push, setClubId } = this.props;
        
        setClubId(clubId);
        push('/');
    }

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
    push: PropTypes.func.isRequired,
    setClubId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clubId: getClubId(state),
    clubs: getClubs(state),
    isFetching: getIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    fetchClubs: () => dispatch(fetchClubs()),
    push: path => dispatch(push(path)),
    setClubId: clubId => dispatch(setClubId(clubId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubsListContainer);
