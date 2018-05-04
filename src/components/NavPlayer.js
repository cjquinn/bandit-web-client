import PropTypes from 'prop-types';
import React from 'react';

var navFadeInactive = {
  width: '0',
};

const NavPlayer = () => (
    <div className="u-pos-relative">
        <div className="c-fade c-fade--left" style={navFadeInactive}></div>
        <div className="c-fade c-fade--right"></div>
        <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li><a href="/" className="c-tab c-tab--active">Profile</a></li>
                <li><a href="/results" className="c-tab c-tab--inactive">Settings</a></li>
                <li><a href="/leaderboard" className="c-tab c-tab--inactive">Club</a></li>
                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div>
    </div>
);

export default NavPlayer;
