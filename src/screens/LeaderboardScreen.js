import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';
import WeeklyLeaderboardPlayer from '../components/WeeklyLeaderboardPlayer';

const LeaderboardScreen = () => (
    <Template>

        <header className="o-container u-ph-1bl">

            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Club Leaderboards</h1>
                <h2 className="u-size-h4">Where competition trumps friendship.</h2>
            </div>

        </header>

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1"><a href="/leaderboard" className="u-block u-pv-105bl u-ph-1bl u-borrad-3300 u-size-h3 u-color-white u-bgcolor-floor">Weekly</a></li>
                <li className="u-grow-1"><a href="/leaderboard" className="u-block u-pv-105bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h3">All-time</a></li>
            </ul>
        </nav>

        <section id="weekly-leaderboard" className="o-container">

            <dl className="u-vspace-3bl">
                <dt className="u-ph-1bl">Monday 8th - Sunday 15th September</dt>
                <dd>
                    <li>
                        <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

                            <div className="c-notification c-notification--alert">
                                <p className="u-weight-bold">Weekly Leaderboard has reset!</p>
                                
                                <p>Play a match to open up this week’s rankings.</p>
                            </div>

                            <WeeklyLeaderboardPlayer/>
                            <WeeklyLeaderboardPlayer/>
                            <WeeklyLeaderboardPlayer/>
                            <WeeklyLeaderboardPlayer/>
                            
                        </ol>
                    </li>
                </dd>
            </dl>

            <footer className="u-ph-1bl">
                <a href="/results" className="c-button c-button--default u-mt-2bl">Load more&hellip;</a>
            </footer>

        </section>

        <Footer />

    </Template>
);

export default LeaderboardScreen;
