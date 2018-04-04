import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const WeeklyLeaderboardPlayer = () => (

    <li class="u-pos-relative u-bgcolor-fold">

        {/*

            If is you

            <div class="o-absolute-fill u-borrad-inherit u-shadow-you u-pointer-none"></div>

        */}

        <a href="/single-player.php" class="u-flex u-ai-center u-pv-1bl u-ph-1bl">

            <div class="u-mr-1bl">
                <PlayerPhoto />
            </div>

            <dl class="u-flex u-jc-between u-ai-center u-width-100pc">
                <div class="u-grow-1 u-vspace-03r">
                    <dt class="u-color-paste">Rebekah Reeves</dt>
                    <dd class="u-flex u-ai-center u-hspace-4px u-size-13px">
                        <span class="u-color-win">+250 <abbr title="rating points">pts.</abbr></span>
                        <span><span class="o-dictate">from</span> 12 wins</span>
                        <span><span class="o-dictate">and</span> 3 losses</span>
                    </dd>
                </div>
                <dd class="u-color-paste u-size-h4 u-weight-bold u-ws-no">#1</dd>
            </dl>
        </a>
    </li>

);

export default WeeklyLeaderboardPlayer;
