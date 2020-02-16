import React from 'react';

import { Link, NavLink, Route, Switch } from 'react-router-dom';

// Containers
import FooterContainer from '../containers/shared/FooterContainer';
import ChallengesByPeriodListContainer from '../containers/lists/ChallengesByPeriodListContainer';

const ChallengesScreen = () => (
    <>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Challenges</h1>
                <h2 className="u-size-h4 u-line-error">Book in your next matches</h2>
            </div>

            <Link to="/challenges/create" className="c-button c-button--default u-mt-2bl">
                Create challenge
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
                    <ChallengesByPeriodListContainer
                        playerId="all"
                        filter="open"
                        {...props}
                    />
                )} />
                
                <Route exact path="/challenges/accepted" render={props => (
                    <ChallengesByPeriodListContainer
                        playerId="all"
                        filter="accepted"
                        {...props}
                    />
                )} />
            </Switch>
        </div>

        <FooterContainer/>
    </>
);

export default ChallengesScreen;
