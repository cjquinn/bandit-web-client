import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from './PlayerPhoto';

const WeeklyLeaderboardPlayer = () => (

    <li className="u-pos-relative u-bgcolor-fold">

        {/*

            If is you

            <div className="o-absolute-fill u-borrad-inherit u-shadow-you u-pointer-none"></div>

        */}

        <a href="/player" className="u-flex u-ai-center u-pv-1bl u-ph-1bl">

            <div className="u-mr-1bl">
                <PlayerPhoto />
            </div>

            <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste">Rebekah Reeves</dt>
                    <dd className="u-flex u-ai-center u-hspace-4px u-size-13px">
                        <span className="u-color-win">+250 <abbr title="rating points">pts.</abbr></span>
                        <span><span className="o-dictate">from</span> 12 wins</span>
                        <span><span className="o-dictate">and</span> 3 losses</span>
                    </dd>
                </div>
                <dd className="u-color-paste u-size-h4 u-weight-bold u-ws-no">#1</dd>
            </dl>
        </a>
    </li>

);

export default WeeklyLeaderboardPlayer;
