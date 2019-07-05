import PropTypes from 'prop-types';
import React from 'react';

// Components
import ChallengesList from './ChallengesList';

const UpcomingChallengesList = ({ currentPlayerId, isFetching, playerId, challenges }) => (
    <div className="o-container u-vspace-3bl">
        {challenges.map(({ period, challenges }, i) => (
            <div key={i}>
                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h3 u-color-white">{period}</h1>
                </header>

                <ChallengesList
                    currentPlayerId={currentPlayerId}
                    challenges={challenges}
                    isFetching={isFetching}
                    playerId={playerId}
                />
            </div>
        ))}
    </div>
);

UpcomingChallengesList.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default UpcomingChallengesList;
