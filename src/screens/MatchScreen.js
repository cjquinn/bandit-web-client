import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import MatchContainer from '../containers/match/MatchContainer';

const MatchScreen = ({ match }) => (
    <>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/matches"
                className="c-go"
            >
                Back to matches
            </Link>
        </div>

        <MatchContainer matchId={+match.params.matchId} />

        <FooterContainer />
    </>
);

MatchScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchScreen;
