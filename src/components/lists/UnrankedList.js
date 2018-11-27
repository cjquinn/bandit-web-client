import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayersList from './PlayersList';

const UnrankedList = ({ players, userId }) => {
    if (players.length === 0) {
        return null;
    }

    return (
        <section className="o-container u-vspace-1bl">
            <header className="u-ph-1bl u-vspace-06r">
                <h1 className="u-size-h2 u-color-white">Waiting</h1>

                <h2 className="u-size-h4">These players are yet to play a match.</h2>
            </header>

            <PlayersList
                players={players}
                userId={userId}
            />
        </section>
    );
};

UnrankedList.propTypes = {
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default UnrankedList;
