import PropTypes from 'prop-types';
import React from 'react';

const NavClub = () => (
    <div class="u-pos-relative">
        <div class="c-fade c-fade--left"></div>
        <div class="c-fade c-fade--right"></div>
        <div class="o-scroll-overflow">
            <ul class="u-flex u-ph-1bl u-hspace-1bl">
                <li><a href="/" class="c-tab c-tab--active">Dashboard</a></li>
                <li><a href="/matches.php" class="c-tab c-tab--inactive">Matches</a></li>
                <li><a href="/leaderboards.php" class="c-tab c-tab--inactive">Leaderboards</a></li>
                <li><a href="/players.php" class="c-tab c-tab--inactive">Players</a></li>
                <li><a href="/club-info.php" class="c-tab c-tab--inactive">Club</a></li>
                <li aria-hidden="true">&nbsp;</li>
            </ul>
        </div>
    </div>
);

NavClub.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default NavClub;
