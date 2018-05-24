import React from 'react';
import { NavLink } from 'react-router-dom';

const navFadeInactive = {width: '0'};

const UserMenu = () => (
    <div className="u-pos-relative">
        <div className="c-fade c-fade--left" style={navFadeInactive}></div>

        <div className="c-fade c-fade--right"></div>

        <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li>
                    <NavLink
                        to="/"
                        className="c-tab c-tab--inactive"
                        activeClassName="c-tab--active"
                        isActive={(match, location) => location.pathname === '/' || location.pathname === '/clubs'}
                    >
                        Clubs
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/settings"
                        exact
                        className="c-tab c-tab--inactive"
                        activeClassName="c-tab--active"
                    >
                        Settings
                    </NavLink>
                </li>
                
                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div>
    </div>
);

export default UserMenu;
