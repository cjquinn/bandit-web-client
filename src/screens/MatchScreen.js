import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/shared/Footer';
import Template from '../components/shared/Template';

// Containers
import MatchContainer from '../containers/match/MatchContainer';

const MatchScreen = ({ match }) => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/matches"
                className="c-go"
            >
                Back to matches
            </Link>
        </div>

        <hr className="c-hr" />

        <MatchContainer matchId={+match.params.matchId} />

        <Footer />
    </Template>
);

MatchScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchScreen;
