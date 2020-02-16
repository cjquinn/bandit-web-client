import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import AddChallengeMatchFormContainer from '../containers/forms/AddChallengeMatchFormContainer';
import AddMatchFormContainer from '../containers/forms/AddMatchFormContainer';

const AddMatchScreen = ({ user }) => (
    <>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Add Match Result</h1>

                <h2 className="u-size-h4">Tell us how it went down, {user.first_name}!</h2>
            </header>
        </div>

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1">
                    <NavLink
                        to="/matches/add"
                        exact
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        New Match
                    </NavLink>
                </li>

                <li className="u-grow-1">
                    <NavLink
                        to="/matches/add/challenges"
                        className="c-tab c-tab--main"
                        activeClassName="c-tab--active"
                    >
                        Challenge
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div className="o-container">
            <Switch>
                <Route exact path="/matches/add" component={AddMatchFormContainer} />
                <Route path="/matches/add/challenges/:challengeId?" component={AddChallengeMatchFormContainer} />
            </Switch>
        </div>

        <FooterContainer />
    </>
);

AddMatchScreen.propTypes = {
    user: PropTypes.object.isRequired
};

export default AddMatchScreen;
