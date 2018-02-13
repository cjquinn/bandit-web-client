import PropTypes from 'prop-types';
import React from 'react';

const PlayerPhoto = () => (
    <div class="u-pos-relative" aria-hidden="true">

        <svg class="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" width="36" height="31" viewBox="0 0 36 31"><use href="/dist/svg/sprite.svg#logo-knot"></use></svg>

        <div class="c-player-photo u-width-1bl">
            <div class="c-player-photo__level u-bgcolor-god"></div>

            <div class="c-player-photo__level u-bgcolor-bandit"></div>
        </div>
    </div>
);

PlayerPhoto.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default PlayerPhoto;
