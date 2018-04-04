import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const AllTimeLeaderboardPlayer = () => (

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
                    <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span class="u-flex u-ai-center u-hspace-4px">
                            <svg class="u-width-1bl u-height-auto" width="11" height="13" viewBox="0 0 11 13">
                                <use href="/dist/svg/sprite.svg#rating"></use>
                            </svg>
                            <span class="u-color-paste">1955 <span class="o-dictate">rating</span></span>
                        </span>
                        <span class="u-uppercase u-color-god">god</span>
                    </dd>
                </div>
                <dd class="u-color-paste u-size-h4 u-weight-bold u-ws-no">#2</dd>
            </dl>
        </a>
    </li>

);

export default AllTimeLeaderboardPlayer;
