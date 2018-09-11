import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import PlayerPhoto from './PlayerPhoto';
import Svg from './Svg';

// Sprites
import logo_head from '../../assets/svg/sprite/logo_head.svg';
import logo_knot from '../../assets/svg/sprite/logo_knot.svg';

const Header = ({ children, club, user }) => (
    <nav>

        {/*<button type="button" class="c-notification c-notification--success c-notification--global" role="alert">
            <div class="o-container">
                <p class="u-weight-bold">Your settings were updated</p>
            </div>
        </button>

        <button type="button" class="c-notification c-notification--error c-notification--global" role="alert">
            <div class="o-container">
                <p class="u-weight-bold">Your match was deleted</p>
            </div>
        </button>

        <a href="/blog" class="c-notification c-notification--alert c-notification--global" role="alert">
            <div class="o-container">
                <p class="u-weight-bold">We have just updated to Bandit 2.0</p>
                <p>Find out what's new on the Bandit HQ blog</p>
            </div>
        </a>*/}
        
        <div className="o-container u-pv-105bl">
            <div className="u-ph-1bl u-flex u-jc-between">
                <NavLink
                    to="/"
                    className="u-flex u-ai-center u-hspace-05bl"
                    activeClassName="u-opac-05 u-opac-1@hover"
                    isActive={(_, location) => /(clubs|settings|profile)/.test(location.pathname)}
                >
                    <div className="u-pos-relative">
                        <Svg
                            sprite={logo_head}
                            className="u-width-2bl u-height-auto"
                            activeClassName=""
                        />
                        
                        <Svg
                            sprite={logo_knot}
                            className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                        />
                    </div>

                    <h1 className="u-uppercase">
                        <p className="u-weight-bold u-color-orange">
                            Bandit Match
                        </p>

                        {club &&
                            <p className="u-size-12px u-color-paste">
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
                    <PlayerPhoto player={user.player} />
                    
                    <span className="u-color-orange u-uppercase u-weight-bold">
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
