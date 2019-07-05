import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchChallenges } from '../../store/byClubId/byPlayerId/challenge/actions';

// Selectors
import { getIsFetching, makeGetChallenges } from '../../store/byClubId/byPlayerId/challenge/selectors';

class ChallengesListContainer extends Component {
    componentDidMount() {
        this.props.fetchChallenges();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerId !== this.props.playerId) {
            this.props.fetchChallenges();
        }
    }

    render() {
        const { component: Component, isFetching, challenges, playerId } = this.props;

        return (
            <Component
                isFetching={isFetching}
                challenges={challenges}
                playerId={playerId}
            />
        );
    }
}

ChallengesListContainer.propTypes = {
    component: PropTypes.func.isRequired,
    fetchChallenges: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    primaryFilter: PropTypes.string.isRequired,
    secondaryFilter: PropTypes.string
};

const makeMapStateToProps = () => {
    const getChallenges = makeGetChallenges();

    return (state, props) => ({
        isFetching: getIsFetching(state, props),
        challenges: getChallenges(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChallenges: () => dispatch(fetchChallenges(ownProps.playerId, ownProps.primaryFilter)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(ChallengesListContainer);
