import PropTypes from 'prop-types';
import React from 'react';

const PlayerPhoto = () => (
    <div className="u-pos-relative" aria-hidden="true">

        <svg className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" width="36" height="31" viewBox="0 0 36 31"><use href="/dist/svg/sprite.svg#logo-knot"></use></svg>

        {/* Only add no-photo if the player has... no... photo.... */}
        <div className="c-player-photo c-player-photo--no-photo u-width-2bl">
            <div className="c-player-photo__level u-bgcolor-god"></div>

            <div className="c-player-photo__level u-bgcolor-bandit"></div>
        </div>
    </div>
);

export default PlayerPhoto;
