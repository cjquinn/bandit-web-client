import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchChallenge } from '../../store/byClubId/byPlayerId/challenge/actions';

// Components
import Challenge from '../../components/challenge/Challenge';

// Selectors
import { makeGetChallenge } from '../../store/byClubId/byPlayerId/challenge/selectors';
import { getUser } from '../../store/user/selectors';

class ChallengeContainer extends Component {
    componentDidMount() {
        this.props.fetchChallenge();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.challengeId !== this.props.challengeId) {
            this.props.fetchChallenge();
        }
    }

    render() {
        const { challenge, user } = this.props;

        return (
            <Challenge
                challenge={challenge}
                user={user}
            />
        );
    }
}

ChallengeContainer.propTypes = {
    fetchChallenge: PropTypes.func.isRequired,
    challenge: PropTypes.object,
    challengeId: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
};

const makeMapStateToProps = () => {
    const getChallenge = makeGetChallenge();

    return (state, props) => ({
        challenge: getChallenge(state, props),
        user: getUser(state)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChallenge: () => dispatch(fetchChallenge(ownProps.challengeId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(ChallengeContainer);
