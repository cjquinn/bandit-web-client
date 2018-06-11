import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMatches } from '../../store/byClubId/byPlayerId/match/actions';

// Selectors
import { makeGetMatches } from '../../store/byClubId/byPlayerId/match/selectors';

class MatchesListContainer extends Component {
    componentDidMount() {
        this.props.fetchMatches();
    }

    render() {
        const { component: Component, matches } = this.props;

        return <Component matches={matches} />;
    }
}

MatchesListContainer.propTypes = {
    component: PropTypes.func.isRequired,
    fetchMatches: PropTypes.func.isRequired,
    limit: PropTypes.string,
    matches: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const makeMapStateToProps = () => {
    const getMatches = makeGetMatches();

    return (state, props) => ({
        matches: getMatches(state, props)
    });
};


const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMatches: () => dispatch(fetchMatches(ownProps.playerId)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MatchesListContainer);
