import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchClubs } from '../../store/club/actions';

// Components
import ClubsList from '../../components/lists/ClubsList';

// Selectors
import { getClubs } from '../../store/club/selectors';

class ClubsListContainer extends Component {
    componentDidMount() {
        this.props.fetchClubs();
    }

    render() {
        const { clubs } = this.props;

        return <ClubsList clubs={clubs} />;
    }
}

ClubsListContainer.propTypes = {
    clubs: PropTypes.array.isRequired,
    fetchClubs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clubs: getClubs(state)
});

const mapDispatchToProps = dispatch => ({
    fetchClubs: () => dispatch(fetchClubs())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubsListContainer);
