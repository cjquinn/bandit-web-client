import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../shared/Svg';

// Sprite
import logo_knot from '../../assets/svg/sprite/logo_knot.svg';

const PlayerPhoto = ({ player, width }) => (
    <div className="u-pos-relative" aria-hidden="true">
        {player && player.isBandit &&
            <Svg
                className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                sprite={logo_knot}
            />
        }

        <div className={`c-player-photo c-player-photo--${player ? 'no-photo' : 'unassigned'} u-width-${width || '2bl'}`}>
            {player && player.level && <div className="c-player-photo__level"><div className={`c-player-photo__stripe u-bgcolor-${player.level.slug}`}></div></div>}

            {player && player.isBandit && <div className="c-player-photo__level"><div className="c-player-photo__stripe u-bgcolor-bandit"></div></div>}
        </div>
    </div>
);

PlayerPhoto.propTypes = {
    player: PropTypes.object,
    width: PropTypes.string
};

export default PlayerPhoto;
