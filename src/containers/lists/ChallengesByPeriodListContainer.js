import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ChallengesByPeriodList from '../../components/lists/ChallengesByPeriodList';

// HOCs
import withChallenges from '../../hocs/withChallenges';

// Selectors
import { getIsFetching, makeGetChallengesByPeriod } from '../../store/byClubId/byPlayerId/challenge/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

class ChallengesByPeriodListContainer extends Component {
    render() {
        const { challengesByPeriod, isFetching } = this.props;

        return (
            <ChallengesByPeriodList
                challengesByPeriod={challengesByPeriod}
                isFetching={isFetching}
            />
        );
    }
}

ChallengesByPeriodListContainer.propTypes = {
    challengesByPeriod: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const makeMapStateToProps = () => {
    const getChallengesByPeriod = makeGetChallengesByPeriod();

    return (state, props) => ({
        currentPlayerId: getCurrentPlayerId(state, props),
        isFetching: getIsFetching(state, props),
        challengesByPeriod: getChallengesByPeriod(state, props)
    });
};

export default connect(makeMapStateToProps)(withChallenges(ChallengesByPeriodListContainer));
