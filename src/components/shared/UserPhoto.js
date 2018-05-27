import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Sprite
import logo_knot from '../../assets/svg/sprite/logo_knot.svg';

const UserPhoto = ({ user }) => (
    <div className="u-pos-relative" aria-hidden="true">
        {user.isBandit &&
            <Svg
                className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                sprite={logo_knot}
            />
        }

        <div className="c-player-photo c-player-photo--no-photo u-width-2bl">
            <div className={`c-player-photo__level u-bgcolor-${user.level.slug}`}></div>

            {user.isBandit && <div className="c-player-photo__level u-bgcolor-bandit"></div>}
        </div>
    </div>
);

UserPhoto.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserPhoto;
