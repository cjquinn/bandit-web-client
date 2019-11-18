import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ChallengesList from '../components/lists/ChallengesList';
import FooterContainer from '../containers/shared/FooterContainer';
import MatchesList from '../components/lists/MatchesList';
import Template from '../components/shared/Template';

// Containers
import ChallengesListContainer from '../containers/lists/ChallengesListContainer';
import MatchesListContainer from '../containers/lists/MatchesListContainer';

const DashboardScreen = ({ user }) => (
    <Template>
        <section className="o-container u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">My Challenges</h1>

                <Link
                    to="/challenges"
                    className="c-go"
                >
                    Go
                </Link>
            </header>

            <ChallengesListContainer
                component={ChallengesList}
                playerId={user.player.id}
                filter="all"
            />

            <div className="u-ph-1bl">
                <Link
                    to="/challenges/create"
                    className="c-button c-button--default u-mt-2bl"
                >
                    Create challenge
                </Link>
            </div>
        </section>
        
        <section className="o-container u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Matches <span className="u-weight-normal u-color-steam">recent</span></h1>

                <Link
                    to="/matches"
                    className="c-go"
                >
                    Go
                </Link>
            </header>

            <MatchesListContainer
                component={MatchesList}
                limit="3"
                playerId="all"
            />

            <div className="u-ph-1bl">
                <Link
                    to="/matches/add"
                    className="c-button c-button--default u-mt-2bl"
                >
                    Add match
                </Link>
            </div>
        </section>

        <FooterContainer />
    </Template>
);

DashboardScreen.propTypes = {
    user: PropTypes.object.isRequired
};

export default DashboardScreen;
