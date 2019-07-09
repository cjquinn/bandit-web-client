import React from 'react';

import { Link, NavLink, Route, Switch } from 'react-router-dom';

// Components
import Template from '../components/shared/Template';
import UpcomingChallengesList from '../components/lists/UpcomingChallengesList';

// Containers
import FooterContainer from '../containers/shared/FooterContainer';
import ChallengesListContainer from '../containers/lists/ChallengesListContainer';

const ChallengesScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Challenges</h1>
                <h2 className="u-size-h4 u-line-error">Book in your next matches</h2>
            </div>

            <Link to="/challenges/create" className="c-button c-button--default u-mt-2bl">
                New challenge
            </Link>
        </header>

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1">
                    <NavLink
                        to="/challenges/open"
                        exact
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        Open
                    </NavLink>
                </li>

                <li className="u-grow-1">
                    <NavLink
                        to="/challenges/accepted"
                        exact
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        Accepted
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div className="o-container u-vspace-3bl">
            <Switch>
                <Route exact path="/challenges/open" render={props => (
                    <ChallengesListContainer
                        component={UpcomingChallengesList}
                        playerId="all"
                        filter="open"
                        {...props}
                    />
                )} />
                
                <Route exact path="/challenges/accepted" render={props => (
                    <ChallengesListContainer
                        component={UpcomingChallengesList}
                        playerId="all"
                        filter="accepted"
                        {...props}
                    />
                )} />
            </Switch>
        </div>

        <FooterContainer/>
    </Template>
);

export default ChallengesScreen;
