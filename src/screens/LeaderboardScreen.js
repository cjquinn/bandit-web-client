import moment from 'moment';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// Components
import AllTimeLeaderboardList from '../components/lists/AllTimeLeaderboardList';
import Footer from '../components/Footer';
import Template from '../components/shared/Template';
import WeeklyLeaderboardList from '../components/lists/WeeklyLeaderboardList';

// Containers
import LeaderboardListContainer from '../containers/lists/LeaderboardListContainer';

const LeaderboardScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Leaderboards</h1>

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

        <Switch>
            <Route exact path="/leaderboard/all-time" render={props => (
                <LeaderboardListContainer
                    component={AllTimeLeaderboardList}
                    period="allTime"
                    {...props}
                />
            )} />
            <Route exact path="/leaderboard/weekly" render={props => (
                <LeaderboardListContainer
                    component={WeeklyLeaderboardList}
                    period="weekly"
                    {...props}
                />
            )} />
        </Switch>

        <Footer>
            <Route exact path="/leaderboard/weekly" render={() => (
                <p>{moment().startOf('isoWeek').format('dddd Do')} - {moment().endOf('isoWeek').format('dddd Do MMMM')}</p>
            )} />
        </Footer>
    </Template>
);

export default LeaderboardScreen;
