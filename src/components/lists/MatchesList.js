import PropTypes from 'prop-types';
import React from 'react';

// Components
import MatchItem from '../items/MatchItem';

const MatchesList = ({ currentPlayerId, isFetching, matches, playerId }) => {
    if (!isFetching && matches.length === 0) {
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No Matches
                </p>
            
                <p>
                    {playerId !== 'all'
                        ? playerId === currentPlayerId
                            ? 'Current player copy'
                            : 'Other player copy'
                        : 'Dashboard/matches screen copy'
                    }
                </p>
            </div>
        );
    }

    return (
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
};

MatchesList.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    matches: PropTypes.array.isRequired,
    playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default MatchesList;
