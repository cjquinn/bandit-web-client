import PropTypes from 'prop-types';
import React from 'react';

// Sprite
import { ReactComponent as RatingSvg } from '../../../assets/svg/sprite/rating.svg';

const Rating = ({ level, playerRating, snapshot }) => (
    <>
        <span className="c-levels u-flex u-ai-center">
            <span className={`c-level u-bgcolor-${level.slug}`}>
                {level.name}
            </span>
        </span>

        <div className="u-flex u-ai-center u-hspace-4px">
            <RatingSvg className="u-width-1bl u-height-auto" />

            <span className="u-color-paste">{playerRating} <span className="o-dictate">rating</span></span>&nbsp;
        
            {snapshot &&
                <dd
                    className={`c-points c-points--match c-points--${snapshot.difference === 0 ? 'neutral' : (snapshot.difference > 0 ? 'win' : 'loss')}`}
                    title="rating points"
                >
                    {snapshot.difference > 0 ? '+' : ''}
                    {snapshot.difference}
                </dd>
            }
        </div>
    </>
);

Rating.propTypes = {
    level: PropTypes.object.isRequired,
    playerRating: PropTypes.number.isRequired,
    snapshot: PropTypes.object
};

export default Rating;
