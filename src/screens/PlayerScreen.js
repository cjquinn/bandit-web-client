import React from 'react';

// Components
import AllTimeLeaderboardPlayer from '../components/AllTimeLeaderboardPlayer';
import Footer from '../components/Footer';
import Match from '../components/Match';
import MiniStats from '../components/MiniStats';
import PlayerPhoto from '../components/PlayerPhoto';
import Svg from '../components/Svg';
import Template from '../components/shared/Template';
import WeeklyLeaderboardPlayer from '../components/WeeklyLeaderboardPlayer';

// Sprites
import rating from '../assets/svg/sprite/rating.svg';

const PlayerScreen = () => (
    <Template>

        <div className="o-container u-vspace-3bl">

            <header className="u-flex u-ai-center u-ph-1bl">

                <div className="u-mr-1bl">
                    <PlayerPhoto />
                </div>

                <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                    <div className="u-grow-1 u-vspace-06r">
                        <dt><h1 className="u-size-h1 u-color-white">Stephen Haynult</h1></dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-15px">
                            <span className="u-flex u-ai-center u-hspace-8px">
                                <span className="u-flex u-ai-center u-hspace-4px">
                                    <Svg
                                        className="u-width-1bl u-height-auto"
                                        sprite={rating}
                                    />

                                    <span className="u-color-paste">1865 <span className="o-dictate">rating</span></span>
                                </span>

                                <span className="u-uppercase u-color-ninja">ninja</span>

                                <span><span className="o-dictate">from</span> 153 games</span>
                            </span>
                        </dd>
                    </div>
                </dl>

            </header>

            <MiniStats />

        </div>

        <hr className="c-hr" />

        <section id="results" className="o-container">

            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Matches</h1>
                {/* <a href="/results" className="c-go">See all</a> */}
            </header>

            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <Match />
                <Match />
                <Match />
            </ol>

        </section>

        <section id="weekly-leaderboard" className="o-container">

            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Weekly <span className="u-color-steam">leaderboard</span></h1>
                <a href="/leaderboard" className="c-go">See all</a>
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
                <a href="/leaderboard" className="c-go">See all</a>
            </header>

            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <AllTimeLeaderboardPlayer />
                <AllTimeLeaderboardPlayer />
                <AllTimeLeaderboardPlayer />
            </ol>

        </section>

        <Footer />

    </Template>
);

export default PlayerScreen;
