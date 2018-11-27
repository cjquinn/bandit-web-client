import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMatches } from '../../store/byClubId/byPlayerId/match/actions';

// Selectors
import { getIsFetching, makeGetMatches } from '../../store/byClubId/byPlayerId/match/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

class MatchesListContainer extends Component {
    componentDidMount() {
        this.props.fetchMatches();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerId !== this.props.playerId) {
            this.props.fetchMatches();
        }
    }

    render() {
        const { component: Component, currentPlayerId, isFetching, matches, playerId } = this.props;

        return (
            <Component
                currentPlayerId={currentPlayerId}
                isFetching={isFetching}
                matches={matches}
                playerId={playerId}
            />
        );
    }
}

MatchesListContainer.propTypes = {
    component: PropTypes.func.isRequired,
    currentPlayerId: PropTypes.number.isRequired,
    fetchMatches: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    limit: PropTypes.string,
    matches: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const makeMapStateToProps = () => {
    const getMatches = makeGetMatches();

    return (state, props) => ({
        currentPlayerId: getCurrentPlayerId(state, props),
        isFetching: getIsFetching(state, props),
        matches: getMatches(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMatches: () => dispatch(fetchMatches(ownProps.playerId)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MatchesListContainer);
