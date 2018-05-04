import PropTypes from 'prop-types';
import React from 'react';

var navFadeInactive = {
  width: '0',
};

const NavClub = () => (
    <div className="u-pos-relative">
        <div className="c-fade c-fade--left" style={navFadeInactive}></div>
        <div className="c-fade c-fade--right"></div>
        <div className="o-scroll-overflow">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li><a href="/" className="c-tab c-tab--active">Dashboard</a></li>
                <li><a href="/results" className="c-tab c-tab--inactive">Matches</a></li>
                <li><a href="/leaderboard" className="c-tab c-tab--inactive">Leaderboards</a></li>
                <li><a href="/players" className="c-tab c-tab--inactive">Players</a></li>
                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div>
    </div>
);

export default NavClub;
