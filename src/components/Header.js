import PropTypes from 'prop-types';
import React from 'react';

import NavClub from '../components/NavClub';
import PlayerPhoto from '../components/PlayerPhoto';

const Header = () => (
    <nav>
        <div class="o-container u-pv-1025bl">
            <div class="u-ph-1bl u-flex u-jc-between">
                <a href="/" class="u-flex u-ai-center u-hspace-05bl">

                    <div class="u-pos-relative">
                        <svg class="u-width-2bl u-height-auto" width="95" height="95" viewBox="0 0 95 95"><use href="/dist/svg/sprite.svg#logo-head"></use></svg>
                        <svg class="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" width="36" height="31" viewBox="0 0 36 31"><use href="/dist/svg/sprite.svg#logo-knot"></use></svg>
                    </div>

                    <span class="u-color-orange u-uppercase u-weight-bold">Bandit</span>
                </a>

                <a href="/profile.php" class="u-flex u-ai-center u-hspace-05bl u-opac-05 u-opac-1@hover">
                    <PlayerPhoto />
                    <span class="u-color-orange u-uppercase u-weight-bold">Stephen</span>
                </a>
            </div>
        </div>

        <NavClub />

    </nav>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Header;
