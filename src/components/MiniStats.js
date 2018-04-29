import React from 'react';

// Components
import PlayerLevel from './PlayerLevel';
import Svg from './Svg';

// Sprites
import rating from '../assets/svg/sprite/rating.svg';

const MiniStats = () => (

    <section className="u-vspace-1bl">

        <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">Stats <span className="u-color-steam">mini</span></h1>
        </header>

        <dl className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            <li className="u-bgcolor-fold">

                <dl className="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold">Wins</dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span className="u-color-paste">200</span>
                        </dd>
                    </div>

                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold">Losses</dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span className="u-color-paste">170</span>
                        </dd>
                    </div>

                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold">Win Ratio</dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span className="u-color-paste">4.12</span>
                        </dd>
                    </div>
                </dl>

            </li>

            <li className="u-bgcolor-fold">

                <dl className="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold">Highest Rating</dt>
                        <dd className="u-flex u-ai-center u-hspace-4px u-size-13px">
                            <Svg
                                className="u-width-1bl u-height-auto"
                                sprite={rating}
                            />

                            <span className="u-color-paste">1925</span>
                        </dd>
                    </div>

                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold">Highest Level</dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <PlayerLevel />
                            <span className="u-uppercase u-color-god">God</span>
                        </dd>
                    </div>

                    <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt className="u-color-paste u-weight-bold"></dt>
                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span className="u-color-paste"></span>
                        </dd>
                    </div>
                </dl>

            </li>
        </dl>

    </section>
);

export default MiniStats;
