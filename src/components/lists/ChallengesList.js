import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loading from '../shared/Loading';
import ChallengeItem from '../items/ChallengeItem';

const ChallengesList = ({ currentPlayerId, filter, isFetching, playerId, challenges }) => {
    if (challenges.length === 0) {
        if (isFetching) {
            return <Loading />;
        }
        
        // return (
        //     // <div className="c-notification c-notification--alert">
        //     //     <p className="u-weight-bold">
        //     //         No challenges
        //     //     </p>
            
        //     //     <p>
        //     //         {playerId !== 'all'
        //     //             ? `${playerId === currentPlayerId ? 'You don\'t have any' : 'This player doesn\'t have any'} ${filter === 'open' ? 'open' : 'upcoming'} challenges.`
        //     //             : 'Create a challenge to find a new opponent.'
        //     //         }
        //     //     </p>
        //     // </div>
        // );
    }

    return (
        <ol className="u-vspace-105bl">
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
    filter: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    challenges: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ChallengesList;
