import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchChallenges } from '../../store/byClubId/byPlayerId/challenge/actions';

// Selectors
import { getIsFetching, makeGetChallenges } from '../../store/byClubId/byPlayerId/challenge/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

class ChallengesListContainer extends Component {
    componentDidMount() {
        this.props.fetchChallenges();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerId !== this.props.playerId ||
            prevProps.filter !== this.props.filter
        ) {
            this.props.fetchChallenges();
        }
    }

    render() {
        const { component: Component, currentPlayerId, filter, isFetching, challenges, playerId } = this.props;

        return (
            <Component
                currentPlayerId={currentPlayerId}
                challenges={challenges}
                filter={filter}
                isFetching={isFetching}
                playerId={playerId}
            />
        );
    }
}

ChallengesListContainer.propTypes = {
    component: PropTypes.func.isRequired,
    currentPlayerId: PropTypes.number.isRequired,
    fetchChallenges: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    filter: PropTypes.string.isRequired
};

const makeMapStateToProps = () => {
    const getChallenges = makeGetChallenges();

    return (state, props) => ({
        currentPlayerId: getCurrentPlayerId(state, props),
        isFetching: getIsFetching(state, props),
        challenges: getChallenges(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChallenges: () => dispatch(fetchChallenges(ownProps.playerId, ownProps.filter)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(ChallengesListContainer);
