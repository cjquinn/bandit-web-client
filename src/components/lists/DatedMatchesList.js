import PropTypes from 'prop-types';
import React from 'react';

// Components
import MatchItem from '../items/MatchItem';

const DatedMatchesList = ({ matches }) => matches.map(({ date, matches }, i) => (
    <section key={i} className="o-container">
        <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">{date}</h1>
        </header>

        <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            {matches.map(match => (
                <li
                    key={match.id}
                    className="u-pos-relative u-bgcolor-fold"
                >
                    <MatchItem match={match} />
                </li>
            ))}
        </ol>
    </section>
));

DatedMatchesList.propTypes = {
    matches: PropTypes.array.isRequired
};

export default DatedMatchesList;
