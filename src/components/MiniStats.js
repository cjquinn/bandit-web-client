import PropTypes from 'prop-types';
import React from 'react';

const MiniStats = () => (

    <section class="u-vspace-1bl">

        <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 class="u-size-h2 u-color-white">Stats <span class="u-color-steam">mini</span></h1>
        </header>

        <dl class="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            <li class="u-bgcolor-fold">

                <dl class="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold">Wins</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span class="u-color-paste">200</span>
                        </dd>
                    </div>

                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold">Losses</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span class="u-color-paste">170</span>
                        </dd>
                    </div>

                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold">Win Ratio</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span class="u-color-paste">4.12</span>
                        </dd>
                    </div>
                </dl>

            </li>

            <li class="u-bgcolor-fold">

                <dl class="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold">Highest Rating</dt>
                        <dd class="u-flex u-ai-center u-hspace-4px u-size-13px">
                            {/* <svg class="u-width-1bl u-height-auto" width="11" height="13" viewBox="0 0 11 13">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/svg/sprite.svg#rating"></use>
                            </svg> */}
                            <span class="u-color-paste">1925</span>
                        </dd>
                    </div>

                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold">Highest Level</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                            {/* <?php
                                $photoWidth = 1;
                                include('components/player-photo-blank.php');
                            ?> */}
                            <span class="u-uppercase u-color-god">God</span>
                        </dd>
                    </div>

                    <div class="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                        <dt class="u-color-paste u-weight-bold"></dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span class="u-color-paste"></span>
                        </dd>
                    </div>
                </dl>

            </li>
        </dl>

    </section>
);

export default MiniStats;
