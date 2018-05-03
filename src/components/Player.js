import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';
import Svg from './Svg';

// Sprite
import rating from '../assets/svg/sprite/rating.svg';

const Player = () => (

    <li class="u-bgcolor-fold">
        <a href="/player" class="u-flex u-ai-center u-pv-1bl u-ph-1bl">

            <div class="u-mr-1bl">
                <PlayerPhoto />
            </div>

            <dl class="u-flex u-jc-between u-ai-center u-width-100pc">
                <div class="u-grow-1 u-vspace-03r">
                    <dt class="u-color-paste">Jamie Knapps</dt>
                    <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span class="u-flex u-ai-center u-hspace-8px">
                            <span class="u-flex u-ai-center u-hspace-4px">
                                <Svg
                                    sprite={rating}
                                    className="u-width-1bl u-height-auto"
                                />
                                <span class="u-color-paste">1650 <span class="o-dictate">rating</span></span>
                            </span>

                            <span><span class="o-dictate">from</span> 47 games</span>
                        </span>
                    </dd>
                </div>
            </dl>
        </a>
    </li>

);

export default Player;
