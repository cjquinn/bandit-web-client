import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import PlayerPhoto from './PlayerPhoto';
import Svg from './Svg';

// Sprites
import logo_head from '../../assets/svg/sprite/logo_head.svg';
import logo_knot from '../../assets/svg/sprite/logo_knot.svg';
import logo_head_pride from '../../assets/svg/sprite/logo_head_pride.svg';
import logo_knot_pride from '../../assets/svg/sprite/logo_knot_pride.svg';

const Header = ({ children, club, user }) => (
    <nav>
        <div className="o-container u-pv-175bl">
            <div className="u-ph-1bl u-flex u-jc-between">
                <NavLink
                    to="/"
                    className="u-flex u-ai-center u-hspace-05bl"
                    activeClassName="u-opac-05 u-opac-1@hover"
                    isActive={(_, location) => /(clubs|settings|profile)/.test(location.pathname)}
                >
                    <div className="u-pos-relative">
                        <Svg
                            sprite={logo_head_pride}
                            className="u-block u-width-2bl u-height-auto"
                            activeClassName=""
                        />
                        
                        <Svg
                            sprite={logo_knot_pride}
                            className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                        />
                    </div>

                    <h1 className="u-uppercase">
                        <p className="u-weight-bold u-color-orange u-ls-02em">
                            Bandit Match
                        </p>

                        {club &&
                            <p className="o-type-tiny u-color-paste">
                                {club.name}
                            </p>
                        }
                    </h1>
                </NavLink>

                <NavLink
                    to="/profile"
                    className="u-flex u-ai-center u-hspace-05bl"
                    activeClassName="u-opac-05 u-opac-1@hover"
                    isActive={(_, location) => !/(clubs|settings|profile)/.test(location.pathname)}
                >
                    <PlayerPhoto 
                        player={user.player} 
                        width="2bl"
                    />
                    
                    <span className="u-ws-no u-color-orange u-uppercase u-weight-bold">
                        {user.display_name}
                    </span>
                </NavLink>
            </div>
        </div>

        {children}
    </nav>
);

Header.propTypes = {
    children: PropTypes.node.isRequired,
    club: PropTypes.object,
    user: PropTypes.object.isRequired
};

export default Header;
