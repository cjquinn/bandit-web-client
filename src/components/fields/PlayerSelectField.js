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
        <div className="c-add-match u-ov-hidden u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">
            <select
                className="u-color-playdough u-capitalize"
                {...input}
            >
                <option value={null}>
                    Find player:
                </option>

                {players.map(player =>
                    <option
                        key={player.id}
                        value={player.id}
                    >
                        {player.user.first_name} {player.user.last_name}
                    </option>
                )}
            </select>

            <div className="c-add-match__photo c-add-match__photo--opponent">
                <PlayerPhoto 
                    player={player} 
                    width="2bl" 
                />
            </div>
        </div>
    );
};

PlayerSelectField.propTypes = {
    input: PropTypes.object.isRequired,
    players: PropTypes.array.isRequired
};

export default PlayerSelectField;
