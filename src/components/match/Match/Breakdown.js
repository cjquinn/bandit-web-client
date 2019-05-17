import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../../shared/Loading';

const Breakdown = ({ breakdown, isPlayerA, playerName, playerAScore, playerBScore, snapshot}) => {
    if (!breakdown) {
        return <Loading />;
    }

    return (
        <ol className="c-match-table__column">
            {(new Array(+playerAScore)).fill(undefined).map((_, i) =>
                <li
                    key={i}
                    className="c-match-table__cell u-size-12px u-jc-between u-ai-center"
                >
                    <span className="o-dictate">${playerName}</span>
                    <span>{isPlayerA ? 'Won' : 'Lost'}</span>
                    <span className={`c-points c-points--game c-points--${isPlayerA ? 'win' : 'loss'}`}>
                        {isPlayerA ? '+' : ''}{breakdown[isPlayerA ? 'win' : 'loss']}
                    </span>
                </li>
            )}

            {(new Array(+playerBScore)).fill(undefined).map((_, i) =>
                <li
                    key={i}
                    className="c-match-table__cell u-size-12px u-jc-between u-ai-center"
                >
                    <span className="o-dictate">${playerName}</span>
                    <span>{isPlayerA ? 'Lost' : 'Won'}</span>
                    <span className={`c-points c-points--game c-points--${isPlayerA ? 'loss' : 'win'}`}>
                        {isPlayerA ? '' : '+'}{breakdown[isPlayerA ? 'loss' : 'win']}
                    </span>
                </li>
            )}

            <li className="c-match-table__foot">
                <span className="c-match-table__subtitle">Total</span>
                <span className="u-ml-auto">
                    <span className={`c-points c-points--match c-points--${snapshot.difference === 0 ? 'neutral' : (snapshot.difference > 0 ? 'win' : 'loss')}`}>
                        {snapshot.difference > 0 ? '+' : ''}
                        {snapshot.difference}
                    </span>
                </span>
            </li>
        </ol>
    );
};

Breakdown.propTypes = {
    breakdown: PropTypes.object,
    isPlayerA: PropTypes.bool.isRequired,
    playerName: PropTypes.string.isRequired,
    playerAScore: PropTypes.number.isRequired,
    playerBScore: PropTypes.number.isRequired,
    snapshot: PropTypes.object.isRequired
};

export default Breakdown;
