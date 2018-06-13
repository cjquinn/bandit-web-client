import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

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
                <li className="u-grow-1">
                    <NavLink
                        to="/leaderboard/weekly"
                        exact
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        Weekly
                    </NavLink>
                </li>

                <li className="u-grow-1">
                    <NavLink
                        to="/leaderboard/all-time"
                        exact
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        All-time
                    </NavLink>
                </li>
            </ul>
        </nav>

        <section id="weekly-leaderboard" className="o-container">
            <dl className="u-vspace-3bl">
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
        </section>

        <Footer>
            <p>{moment().startOf('isoWeek').format('dddd Do')} - {moment().endOf('isoWeek').format('dddd Do MMMM')}</p>
        </Footer>
    </Template>
);

export default LeaderboardScreen;
