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
        <div className="c-add-match__player--opponent">
            <div className="c-select">
                <select
                    className="c-select__select u-color-playdough u-capitalize"
                    {...input}
                >
                    <option value={null}>
                        Select player
                    </option>

                    {players.map(player =>
                        <option
                            key={player.id}
                            value={player.id}
                        >
                            {player.user.full_name}
                        </option>
                    )}
                </select>
            </div>

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
