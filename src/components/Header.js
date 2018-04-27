import React from 'react';

import NavClub from '../components/NavClub';
import PlayerPhoto from '../components/PlayerPhoto';
import Svg from './Svg';

// Sprite
import logo_head from '../assets/svg/sprite/logo_head.svg';
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const Header = () => (
    <nav>
        <div className="o-container u-pv-1025bl">
            <div className="u-ph-1bl u-flex u-jc-between">
                <a href="/" className="u-flex u-ai-center u-hspace-05bl">

                    <div className="u-pos-relative">
                        <Svg
                            sprite={logo_head}
                            className="u-width-2bl u-height-auto"
                        />
                        
                        <Svg
                            sprite={logo_knot}
                            className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                        />
                    </div>

                    <span className="u-color-orange u-uppercase u-weight-bold">Bandit</span>
                </a>

                <a href="/profile.php" className="u-flex u-ai-center u-hspace-05bl u-opac-05 u-opac-1@hover">
                    <PlayerPhoto />
                    <span className="u-color-orange u-uppercase u-weight-bold">Stephen</span>
                </a>
            </div>
        </div>

        <NavClub />

    </nav>
);

export default Header;
