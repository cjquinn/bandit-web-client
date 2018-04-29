import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from './PlayerPhoto';

const Dispute = () => (
    <li className="u-bgcolor-fold u-pos-relative">
        <div className="o-absolute-fill u-borrad-inherit u-shadow-dispute u-pointer-none"></div>
        <a href="/single-result-disputed.php" className="u-flex u-ai-center u-pv-1bl u-ph-1bl">
            <div className="u-mr-1bl">
                <PlayerPhoto />
            </div>
            <div className="u-grow-1 u-vspace-03r">
                <dt className="u-color-paste"><span className="o-dictate">Dispute with </span>Rebekah Reeves</dt>
                <dd className="u-size-14px u-color-hotmelon"><span className="o-dictate">You have </span>4 hours to respond</dd>
            </div>
        </a>
    </li>
);

export default Dispute;
