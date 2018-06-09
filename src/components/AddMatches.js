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

                <PlayerPhoto />

                <span className="o-ellipsis" aria-hidden="true">Stephen</span>

            </div>

            <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

                <input list="players" id="opponent" name="opponent" />
                <datalist id="players">
                    <option value="Andrew Berkheardt" />
                    <option value="Betty Praline" />
                    <option value="Charice Melontown" />
                    <option value="Christy Quinn" />
                    <option value="Russell Bishop" />
                </datalist>

                <PlayerPhoto />

            </div>

        </div>
    </li>

);

export default AddMatches;
