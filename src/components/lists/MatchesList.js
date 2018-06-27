import PropTypes from 'prop-types';
import React from 'react';

// Components
import MatchItem from '../items/MatchItem';

const MatchesList = ({ matches }) => (
    <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
        {matches.map(match =>
            <li
                key={match.id}
                className="u-pos-relative u-bgcolor-fold"
            >
                <MatchItem match={match} />
            </li>
        )}
    </ol>
);

MatchesList.propTypes = {
    matches: PropTypes.array.isRequired
};

export default MatchesList;
