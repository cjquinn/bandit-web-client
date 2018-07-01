import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchLeaderboard } from '../../store/byClubId/leaderboard/actions';

// Selectors
import { getIsFetching, makeGetLeaderboard } from '../../store/byClubId/leaderboard/selectors';
import { getUserId } from '../../store/shared/selectors';

class LeaderboardListContainer extends Component {
    componentDidMount() {
        this.props.fetchLeaderboard();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.period !== this.props.period) {
            this.props.fetchLeaderboard();
        }
    }

    render() {
        const { component: Component, isFetching, players, userId } = this.props;

        return (
            <Component
                isFetching={isFetching}
                players={players}
                userId={userId}
            />
        );
    }
}

LeaderboardListContainer.propTypes = {
    component: PropTypes.func.isRequired,
    fetchLeaderboard: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    limit: PropTypes.string,
    period: PropTypes.string.isRequired,
    playerId: PropTypes.number,
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getLeaderboard = makeGetLeaderboard();

    return (state, props) => ({
        isFetching: getIsFetching(state, props),
        players: getLeaderboard(state, props),
        userId: getUserId(state)
    });
};


const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchLeaderboard: () => dispatch(fetchLeaderboard(ownProps.period)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(LeaderboardListContainer);
