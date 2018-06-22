import React from 'react';
import { NavLink } from 'react-router-dom';

const navFadeInactive = {width: '0'};

const ClubMenu = () => (
    <div className="u-pos-relative">
        <div className="c-fade c-fade--left" style={navFadeInactive}></div>

        <div className="c-fade c-fade--right"></div>

        <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
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
                        to="/leaderboard"
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

                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div>
    </div>
);

export default ClubMenu;
