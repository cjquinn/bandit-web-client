import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../PlayerPhoto';
import Svg from '../Svg';

// Sprites
import logo_head from '../../assets/svg/sprite/logo_head.svg';
import logo_knot from '../../assets/svg/sprite/logo_knot.svg';

const Header = ({ children, club, user }) => {
    if (!user) {
        return null;
    }

    return (
        <nav>
            <div className="o-container u-pv-1025bl">
                <div className="u-ph-1bl u-flex u-jc-between">
                    <Link
                        to="/"
                        className="u-flex u-ai-center u-hspace-05bl"
                    >
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

                        <span className="u-color-orange u-uppercase u-weight-bold">
                            {club ? club.name : 'Bandit'}
                        </span>
                    </Link>

                    <Link
                        to="/settings"
                        className="u-flex u-ai-center u-hspace-05bl u-opac-05 u-opac-1@hover"
                    >
                        <PlayerPhoto />
                        
                        <span className="u-color-orange u-uppercase u-weight-bold">
                            {user.name}
                        </span>
                    </Link>
                </div>
            </div>

            {children}
        </nav>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    club: PropTypes.object,
    user: PropTypes.object
};

export default Header;
