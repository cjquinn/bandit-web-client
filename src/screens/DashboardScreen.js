import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AllTimeLeaderboardList from '../components/lists/AllTimeLeaderboardList';
import FooterContainer from '../containers/shared/FooterContainer';
import MatchesList from '../components/lists/MatchesList';
import Template from '../components/shared/Template';
import WeeklyLeaderboardList from '../components/lists/WeeklyLeaderboardList';

// import Disputes from '../components/Disputes';

// Containers
import LeaderboardListContainer from '../containers/lists/LeaderboardListContainer';
import MatchesListContainer from '../containers/lists/MatchesListContainer';

const DashboardScreen = () => (
    <Template>
        {/*<Disputes />*/}

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

            <FooterContainer className="u-ph-1bl">
                <Link
                    to="/matches/add"
                    className="c-button c-button--default u-mt-2bl"
                >
                    Add match
                </Link>
            </FooterContainer>
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

        <FooterContainer />
    </Template>
);

export default DashboardScreen;
