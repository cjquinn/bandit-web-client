import React from 'react';

// Components
import AllTimeLeaderboardPlayer from '../components/AllTimeLeaderboardPlayer';
import Footer from '../components/Footer';
import Match from '../components/Match';
import MiniStats from '../components/MiniStats';
import PlayerPhoto from '../components/PlayerPhoto';
import Svg from '../components/Svg';
import Template from '../components/Template';
import WeeklyLeaderboardPlayer from '../components/WeeklyLeaderboardPlayer';

// Sprite
import rating from '../assets/svg/sprite/rating.svg';

const PlayerScreen = () => (
    <Template>
        <main class="o-main">

            <div class="o-container u-vspace-3bl">

                <header class="u-flex u-ai-center u-ph-1bl">

                    <div class="u-mr-1bl">
                        <PlayerPhoto />
                    </div>

                    <dl class="u-flex u-jc-between u-ai-center u-width-100pc">
                        <div class="u-grow-1 u-vspace-06r">
                            <dt><h1 class="u-size-h1 u-color-white">Stephen Haynult</h1></dt>
                            <dd class="u-flex u-ai-center u-hspace-8px u-size-15px">
                                <span class="u-flex u-ai-center u-hspace-8px">
                                    <span class="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span class="u-color-paste">1865 <span class="o-dictate">rating</span></span>
                                    </span>

                                    <span class="u-uppercase u-color-ninja">ninja</span>

                                    <span><span class="o-dictate">from</span> 153 games</span>
                                </span>
                            </dd>
                        </div>
                    </dl>

                </header>

                <MiniStats />

            </div>

            <hr class="c-hr" />

            <section id="results" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Matches</h1>
                    <a href="/profile-matches.php" class="c-go">See all</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <Match />
                    <Match />
                    <Match />
                </ol>

            </section>

            <section id="weekly-leaderboard" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Weekly <span class="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" class="c-go">See all</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <WeeklyLeaderboardPlayer />
                    <WeeklyLeaderboardPlayer />
                    <WeeklyLeaderboardPlayer />
                </ol>

            </section>

            <section id="alltime-leaderboard" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">All time <span class="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" class="c-go">See all</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <AllTimeLeaderboardPlayer />
                    <AllTimeLeaderboardPlayer />
                    <AllTimeLeaderboardPlayer />
                </ol>

            </section>

            <Footer />

        </main>
    </Template>
);

export default PlayerScreen;