import PropTypes from 'prop-types';
import React from 'react';

// Components
import Template from '../components/shared/Template';

// Containers
import ChallengeContainer from '../containers/challenge/ChallengeContainer';
import FooterContainer from '../containers/shared/FooterContainer';

const ChallengeScreen = ({ match }) => (
    <Template>
        <ChallengeContainer challengeId={+match.params.challengeId} />

        <FooterContainer />
    </Template>
);

ChallengeScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default ChallengeScreen;
