import React from 'react';

// Components
import Footer from '../components/Footer';

import Disputes from '../components/Disputes';
import DashboardMatches from '../components/DashboardMatches';

import Match from '../components/Match';
import Template from '../components/Template';

import AllTimeLeaderboardPlayer from '../components/AllTimeLeaderboardPlayer';
import WeeklyLeaderboardPlayer from '../components/WeeklyLeaderboardPlayer';

const DashboardScreen = () => (
    <Template>

        <main className="o-main">

            <Disputes />

            <DashboardMatches />

            <section id="weekly-leaderboard" className="o-container">

                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h2 u-color-white">Weekly <span className="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" className="c-go u-color-playdough">go to</a>
                </header>

                <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

                    <WeeklyLeaderboardPlayer />
                    <WeeklyLeaderboardPlayer />
                    <WeeklyLeaderboardPlayer />
                </ol>

            </section>

            <section id="alltime-leaderboard" className="o-container">

                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h2 u-color-white">All time <span className="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" className="c-go u-color-playdough">go to</a>
                </header>

                <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

                    <AllTimeLeaderboardPlayer />
                    <AllTimeLeaderboardPlayer />
                    <AllTimeLeaderboardPlayer />

                </ol>

            </section>

            <Footer />

        </main>

    </Template>
);

export default DashboardScreen;
