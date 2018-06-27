import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerItem from '../items/PlayerItem';

const PlayersList = ({ players, userId }) => (
    <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
        {players.map(player =>
            <li
                key={player.id}
                className="u-pos-relative u-bgcolor-fold"
            >
                <PlayerItem
                    player={player}
                    userId={userId}
                />
            </li>
        )}
    </ol>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default PlayersList;
