import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loading from '../shared/Loading';
import ChallengeItem from '../items/ChallengeItem';

const ChallengesList = ({ isFetching, challenges }) => {
    if (challenges.length === 0) {
        if (isFetching) {
            return <Loading />;
        }

        if (isFetching !== undefined) {
            return (
                <div className="c-notification c-notification--alert">
                    <p className="u-weight-bold">No challenges</p>
                
                    <p>Create a challenge to find a new opponent.</p>
                </div>
            );
        }
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
    isFetching: PropTypes.bool,
    challenges: PropTypes.array.isRequired
};

export default ChallengesList;
