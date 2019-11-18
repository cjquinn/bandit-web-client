import PropTypes from 'prop-types';
import React from 'react';

// Components
import ChallengesList from './ChallengesList';
import Loading from '../shared/Loading';
import Template from '../shared/Template';

const ChallengesByPeriodList = ({ isFetching, challengesByPeriod }) => {
    if (challengesByPeriod.length === 0) {
        if (isFetching) {
            return <Loading />;
        }

        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">No challenges</p>
            
                <p>Create a challenge to find a new opponent.</p>
            </div>
        );
    }

    return ['thisWeek', 'nextWeek', 'further'].map(key => {
        const { period, challenges } = challengesByPeriod[key];

        return (
            <Template key={key}>
                <div className="u-vspace-2bl">
                    <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                        <h1 className="u-size-h3 u-color-white">{period}</h1>
                    </header>

                    <ChallengesList challenges={challenges} />
                </div>

                {period !== 'Further' && <hr className="c-hr" />}
            </Template>
        );
    });
};

ChallengesByPeriodList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    challengesByPeriod: PropTypes.object.isRequired
};

export default ChallengesByPeriodList;
