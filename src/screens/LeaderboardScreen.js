import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';
import WeeklyLeaderboardPlayer from '../components/WeeklyLeaderboardPlayer';

const LeaderboardScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl">

                <div class="u-vspace-06r">
                    <h1 class="u-size-h1 u-color-white">Club Leaderboards</h1>
                    <h2 class="u-size-h4">Where competition trumps friendship.</h2>
                </div>

            </header>

            <nav class="u-bgcolor-fold u-pt-2bl u-borrad-3300">
                <ul class="u-flex u-ph-1bl u-hspace-1bl">
                    <li class="u-grow-1"><a href="/leaderboards.php" class="u-block u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h3 u-color-white u-bgcolor-floor">Weekly</a></li>
                    <li class="u-grow-1"><a href="/leaderboards-all-time.php" class="u-block u-pv-1bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h3">All-time</a></li>
                </ul>
            </nav>

            <section id="weekly-leaderboard" class="o-container">

                <dl class="u-vspace-3bl">
                    <dt class="u-ph-1bl">Monday 8th - Sunday 15th September</dt>
                    <dd>
                        <li>
                            <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

                                <WeeklyLeaderboardPlayer/>
                                <WeeklyLeaderboardPlayer/>
                                <WeeklyLeaderboardPlayer/>
                                <WeeklyLeaderboardPlayer/>
                                
                            </ol>
                        </li>
                    </dd>
                </dl>

                <footer class="u-ph-1bl">
                    <a href="/matches.php" class="c-button c-button--default u-mt-2bl">Load more&hellip;</a>
                </footer>

            </section>

            <Footer />

        </main>
    </Template>
);

export default LeaderboardScreen;
