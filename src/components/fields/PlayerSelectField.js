import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';

const PlayerSelectField = ({ input, players }) => {
    let player = players.find(player => player.id === +input.value);

    if (!player) {
        player = {};
    }

    return (
        <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">
            <select
                {...input}
                className="u-color-playdough"
            >
                <optgroup label="Find player:">
                    {players.map(player =>
                        <option
                            key={player.id}
                            value={player.id}
                        >
                            {player.user.name}
                        </option>
                    )}
                </optgroup>
            </select>

            <PlayerPhoto player={player} />
        </div>
    );
};

PlayerSelectField.propTypes = {
    input: PropTypes.object.isRequired,
    players: PropTypes.array.isRequired
};

export default PlayerSelectField;
