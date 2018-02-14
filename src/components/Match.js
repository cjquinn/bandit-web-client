import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const Match = () => (

    <li class="u-pos-relative u-bgcolor-fold">

        <a href="/single-result.php" class="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

            <div class="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

                <PlayerPhoto />

                <dt class="u-size-h4 u-weight-bold u-ws-no">
                    <span class="o-dictate">Jane Austin </span> 5 &ndash; <span class="o-dictate">Michael Hamlet </span>2
                </dt>

                <PlayerPhoto />

            </div>

            <div class="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis">

                <span aria-hidden="true">Jane</span>

            </div>


            <div class="u-grow-1 u-basis-0 u-order-3 u-align-right o-ellipsis">

                <span aria-hidden="true">Michael</span>

            </div>

        </a>
    </li>
);

export default Match;
