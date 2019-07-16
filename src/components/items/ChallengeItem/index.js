import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Players from './Players';

const ChallengeItem = ({ challenge }) => (
    <Link
        to={`/challenges/${challenge.id}`}
        className="u-block u-color-paste"
    >
        <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">
            <div>
                <p className="u-size-14px u-color-white u-weight-bold">
                    {challenge.moment.format('dddd HH:mm')}
                </p>
            </div>
            
            <div className="u-align-right">
                <p className="u-color-white u-size-13px u-weight-bold">
                    {challenge.moment.format('Do MMMM')}
                </p>
            </div>
        </div>

        <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">
            <Players challenge={challenge} />
        </div>
    </Link>
);

ChallengeItem.propTypes = {
    challenge: PropTypes.object.isRequired
};

export default ChallengeItem;
