import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from './PlayerPhoto';

const AddMatches = () => (

    <li className="u-bgcolor-fold">
        <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

            <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

                <dt className="u-size-h4 u-weight-bold u-ws-no">
                    <span className="o-dictate">Teddy Austin </span> <input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span className="o-dictate">Angelica Hamlet </span><input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
                </dt>

            </div>

            <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">

                <PlayerPhoto 
                    width="2bl"
                />

                <span className="o-ellipsis" aria-hidden="true">Stephen</span>

            </div>

            <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

                <select className="u-color-playdough">
                    <optgroup label="Find player:">
                        <option>Andrew Berkheardt</option>
                        <option>Betty Praline</option>
                        <option>Charice Melontown</option>
                    </optgroup>
                </select>

                <PlayerPhoto 
                    width="2bl"
                />

            </div>

        </div>
    </li>

);

export default AddMatches;
