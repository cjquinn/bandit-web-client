import React from 'react';
import { NavLink } from 'react-router-dom';

const navFadeInactive = {width: '0'};

const UserMenu = () => (
    <div className="u-pos-relative">

<div className="u-ph-1bl">
            <button className="c-tab c-tab--header c-tab--active">
                &#9776; Settings
            </button>

            <ul className="u-pb-1bl">

                <li>
                    <NavLink
                        to="/settings"
                        exact
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Settings
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/clubs"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Clubs
                    </NavLink>
                </li>
            </ul>
        </div>

        {/* <div className="c-fade c-fade--left" style={navFadeInactive}></div>

        <div className="c-fade c-fade--right"></div>

        <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-05bl">
                <li>
                    <NavLink
                        to="/profile"
                        exact
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/settings"
                        exact
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Settings
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/clubs"
                        className="c-tab c-tab--header"
                        activeClassName="c-tab--active"
                    >
                        Clubs
                    </NavLink>
                </li>
                
                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div> */}
    </div>
);

export default UserMenu;
