import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Containers
import ChallengeContainer from '../containers/challenge/ChallengeContainer';
import FooterContainer from '../containers/shared/FooterContainer';

const ChallengeScreen = ({ match }) => (
    <>

        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/challenges"
                className="c-go"
            >
                Back to challenges
            </Link>
        </div>

        <ChallengeContainer challengeId={+match.params.challengeId} />

        <FooterContainer />
    </>
);

ChallengeScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default ChallengeScreen;
