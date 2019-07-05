import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AllTimeLeaderboardList from '../components/lists/AllTimeLeaderboardList';
import ChallengesList from '../components/lists/ChallengesList';
import FooterContainer from '../containers/shared/FooterContainer';
import MatchesList from '../components/lists/MatchesList';
import Template from '../components/shared/Template';
import WeeklyLeaderboardList from '../components/lists/WeeklyLeaderboardList';

// Containers
import ChallengesListContainer from '../containers/lists/ChallengesListContainer';
import LeaderboardListContainer from '../containers/lists/LeaderboardListContainer';
import MatchesListContainer from '../containers/lists/MatchesListContainer';

const DashboardScreen = ({ user }) => (
    <Template>
        <section className="o-container u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Challenges <span className="u-weight-normal u-color-steam">open</span></h1>

                <Link
                    to="/challenges/open"
                    className="c-go"
                >
                    Go
                </Link>
            </header>

            <ChallengesListContainer
                component={ChallengesList}
                playerId={user.player.id}
                primaryFilter="all"
                secondaryFilter="open"
            />
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

        <section className="o-container u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">All time <span className="u-weight-normal u-color-steam">leaderboard</span></h1>

                <Link
                    to="/leaderboard/all-time"
                    className="c-go"
                >
                    Go
                </Link>
            </header>

            <LeaderboardListContainer
                component={AllTimeLeaderboardList}
                limit="3"
                period="allTime"
            />
        </section>

        <section className="o-container u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Weekly <span className="u-weight-normal u-color-steam">leaderboard</span></h1>

                <Link
                    to="/leaderboard/weekly"
                    className="c-go"
                >
                    Go
                </Link>
            </header>

            <LeaderboardListContainer
                component={WeeklyLeaderboardList}
                limit="3"
                period="weekly"
            />
        </section>

        <FooterContainer />
    </Template>
);

DashboardScreen.propTypes = {
    user: PropTypes.object.isRequired
};

export default DashboardScreen;
