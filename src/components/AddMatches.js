import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const AddMatches = () => (

    <li class="u-bgcolor-fold">
        <div class="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

            <div class="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

                <dt class="u-size-h4 u-weight-bold u-ws-no">
                    <span class="o-dictate">Teddy Austin </span> <input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span class="o-dictate">Angelica Hamlet </span><input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
                </dt>

            </div>

            <div class="u-ov-hidden u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">

                <PlayerPhoto />

                <span class="o-ellipsis" aria-hidden="true">Stephen</span>

            </div>

            <div class="u-ov-hidden u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

                <select class="u-color-playdough">
                    <option selected="" disabled>Opponent</option>
                    <optgroup label="Find player:">
                        <option>Andrew Berkheardt</option>
                        <option>Betty Praline</option>
                        <option>Charice Melontown</option>
                    </optgroup>
                </select>

                <PlayerPhoto />

            </div>

        </div>
    </li>

);

export default AddMatches;
