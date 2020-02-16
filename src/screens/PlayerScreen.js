import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AllTimeLeaderboardList from '../components/lists/AllTimeLeaderboardList';
import FooterContainer from '../containers/shared/FooterContainer';
import MatchesList from '../components/lists/MatchesList';
import WeeklyLeaderboardList from '../components/lists/WeeklyLeaderboardList';

// Containers
import LeaderboardListContainer from '../containers/lists/LeaderboardListContainer';
import MatchesListContainer from '../containers/lists/MatchesListContainer';
import PlayerContainer from '../containers/player/PlayerContainer';

const PlayerScreen = ({ match, user }) => (
    <>
        <PlayerContainer playerId={match.params.playerId ? +match.params.playerId : user.player.id} />

        <hr className="c-hr" />

        <section className="o-container u-vspace-1bl">
            <header className="u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Matches <span className="u-weight-normal u-color-steam">recent</span></h1>
            </header>

            <MatchesListContainer
                component={MatchesList}
                limit="3"
                playerId={match.params.playerId ? +match.params.playerId : user.player.id}
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
                playerId={match.params.playerId ? +match.params.playerId : user.player.id}
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
                playerId={match.params.playerId ? +match.params.playerId : user.player.id}
            />
        </section>

        <FooterContainer />
    </>
);

PlayerScreen.propTypes = {
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default PlayerScreen;
