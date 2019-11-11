import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import PlayerPhoto from '../../shared/PlayerPhoto';
import Svg from '../../shared/Svg';

// Sprites
import rating from '../../../assets/svg/sprite/rating.svg';

const Player = ({ autoFocus = false, name, player }) => (
    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
            <PlayerPhoto 
                player={player} 
                width="4bl" 
            />

            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                <h2 className="u-weight-bold u-color-paste u-capitalize">
                    {player.user.first_name} {player.user.last_name}
                </h2>

                <div className="u-flex u-hspace-4px u-ai-center">
                    <div className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            sprite={rating}
                            className="u-width-1bl u-height-auto"
                        />

                        <span className="u-color-paste">{player.rating} <span className="o-dictate">rating</span></span>
                    </div>
                </div>
            </dt>

            <dd className="u-mt-2bl">
                <Field
                    autoFocus={autoFocus}
                    className="c-score-input"
                    name={name}
                    component="input"
                    type="number"
                    placeholder="0"
                    min="0"
                />
            </dd>
        </div>
    </li>
);

Player.propTypes = {
    autoFocus: PropTypes.bool,
    name: PropTypes.string.isRequired,
    player: PropTypes.object.isRequired
};

export default Player;
