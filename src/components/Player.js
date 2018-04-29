import React from 'react';

// Components
import PlayerPhoto from './PlayerPhoto';
import Svg from './Svg';

// Sprites
import rating from '../assets/svg/sprite/rating.svg';

const Player = () => (

    <li className="u-bgcolor-fold">
        <a href="/single-player.php" className="u-flex u-ai-center u-pv-1bl u-ph-1bl">

            <div className="u-mr-1bl">
                <PlayerPhoto />
            </div>

            <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste">Jamie Knapps</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-8px">
                            <span className="u-flex u-ai-center u-hspace-4px">
                                <Svg
                                    className="u-width-1bl u-height-auto"
                                    sprite={rating}
                                />

                                <span className="u-color-paste">1650 <span className="o-dictate">rating</span></span>
                            </span>

                            <span><span className="o-dictate">from</span> 47 games</span>
                        </span>
                    </dd>
                </div>
            </dl>
        </a>
    </li>

);

export default Player;
