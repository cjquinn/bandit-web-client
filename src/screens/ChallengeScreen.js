import PropTypes from 'prop-types';
import React from 'react';

// Containers
import ChallengeContainer from '../containers/challenge/ChallengeContainer';
import FooterContainer from '../containers/shared/FooterContainer';

const ChallengeScreen = ({ match }) => (
    <>
        <ChallengeContainer challengeId={+match.params.challengeId} />

        <FooterContainer />
    </>
);

ChallengeScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default ChallengeScreen;
