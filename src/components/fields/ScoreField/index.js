import PropTypes from 'prop-types';
import React from 'react';

// Components
import Player from './Player';

const ScoreField = ({ playerA, playerB }) => (
    <div className="u-vspace-1bl">
        <h3 className="u-size-h4 u-weight-bold u-color-white u-ph-1bl">Score:</h3>

        <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
            <Player
                autoFocus={true}
                player={playerA}
                name="player_a_score"
            />

            <Player
                player={playerB}
                name="player_b_score"
            />
        </dl>
    </div>
);

ScoreField.propTypes = {
    playerA: PropTypes.object.isRequired,
    playerB: PropTypes.object.isRequired
};

export default ScoreField;
