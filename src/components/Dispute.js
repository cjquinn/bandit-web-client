import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const Dispute = () => (
    <li class="u-bgcolor-fold u-pos-relative">
        <div class="o-absolute-fill u-borrad-inherit u-shadow-dispute u-pointer-none"></div>
        <a href="/single-result-disputed.php" class="u-flex u-ai-center u-pv-1bl u-ph-1bl">
            <div class="u-mr-1bl">
                <PlayerPhoto />
            </div>
            <div class="u-grow-1 u-vspace-03r">
                <dt class="u-color-paste"><span class="o-dictate">Dispute with </span>Rebekah Reeves</dt>
                <dd class="u-size-14px u-color-hotmelon"><span class="o-dictate">You have </span>4 hours to respond</dd>
            </div>
        </a>
    </li>
);

export default Dispute;
