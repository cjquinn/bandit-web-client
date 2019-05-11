import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navFadeInactive = {width: '0'};

const ClubMenu = ({ isClubOwner }) => (
    <div className="u-pos-relative">

        <div className="u-ph-1bl">
            <button className="c-tab c-tab--header c-tab--active">
                &#9776; Home
            </button>

            <ul className="u-pb-1bl">
                <li>
                    <NavLink
                        to="/"
                        exact
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/challenges"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Challenges
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/matches"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Matches
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/leaderboard/all-time"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Leaderboards
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/profile"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/players"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Players
                    </NavLink>
                </li>

                {isClubOwner &&
                    <li>
                        <NavLink
                            to="/club"
                            className="c-tab c-tab--header"
                            activeClassName="c-tab--active"
                        >
                            Club Settings
                        </NavLink>
                    </li>
                }
            </ul>
        </div>



        {/* <div className="c-fade c-fade--left" style={navFadeInactive}></div> */}

        {/* <div className="c-fade c-fade--right"></div> */}

        {/* <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-05bl">
                <li>
                    <NavLink
                        to="/"
                        exact
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/matches"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Matches
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/leaderboard/all-time"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Leaderboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/players"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Players
                    </NavLink>
                </li>

                {isClubOwner &&
                    <li>
                        <NavLink
                            to="/club"
                            className="c-tab c-tab--header"
                            activeClassName="c-tab--active"
                        >
                            Club
                        </NavLink>
                    </li>
                }

                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div> */}
    </div>
);

ClubMenu.propTypes = {
    isClubOwner: PropTypes.bool.isRequired
};

export default ClubMenu;
