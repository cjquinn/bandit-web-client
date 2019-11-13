import PropTypes from 'prop-types';
import React from 'react';

// Components
import ChallengesList from './ChallengesList';
import Template from '../shared/Template';

const UpcomingChallengesList = ({ currentPlayerId, filter, isFetching, playerId, challenges }) => (
    challenges.map(({ period, challenges }, i) => (
        <Template key={i}>
            <div className="u-vspace-2bl">
                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h3 u-color-white">{period}</h1>
                </header>

                <ChallengesList
                    currentPlayerId={currentPlayerId}
                    challenges={challenges}
                    filter={filter}
                    isFetching={isFetching}
                    playerId={playerId}
                />
            </div>

            {period !== 'Further' && <hr className="c-hr" />}
        </Template>
    ))
);

UpcomingChallengesList.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default UpcomingChallengesList;
