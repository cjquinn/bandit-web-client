import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loading from '../shared/Loading';
import ChallengeItem from '../items/ChallengeItem';

const ChallengesList = ({ currentPlayerId, isFetching, playerId, challenges }) => {
    if (challenges.length === 0) {
        if (isFetching) {
            return <Loading />;
        }
        
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No challenges
                </p>
            
                <p>
                    {playerId !== 'all'
                        ? playerId === currentPlayerId
                            ? 'You haven\'t created any challenges yet.'
                            : 'This player hasn\'t created any challenges yet.'
                        : 'Create a challenge to find a new opponent.'
                    }
                </p>
            </div>
        );
    }

    return (
        <ol className="u-mt-2bl u-vspace-1bl">
            {challenges.map(challenge =>
                <li key={challenge.id}>
                    <ChallengeItem challenge={challenge} />
                </li>
            )}
        </ol>
    );
};

ChallengesList.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ChallengesList;
