import PropTypes from 'prop-types';
import React from 'react';

// Components
import WeeklyLeaderboardItem from '../items/WeeklyLeaderboardItem';

const WeeklyLeaderboardList = ({ currentPlayerId, isFetching, playerId, players, userId }) => {
    if (!isFetching && players.length === 0) {
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No weely leaderboard
                </p>
            
                <p>
                    {playerId
                        ? playerId === currentPlayerId
                            ? 'Current player copy'
                            : 'Other player copy'
                        : 'Leaderboard/dashboard screen copy'
                    }
                </p>
            </div>
        );
    }

    return (
        <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            {players.map(player => (
                <li
                    key={player.id}
                    className="u-pos-relative u-bgcolor-fold"
                >
                    <WeeklyLeaderboardItem
                        player={player}
                        userId={userId}
                    />
                </li>
            ))}
        </ol>
    );
};

WeeklyLeaderboardList.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    playerId: PropTypes.number,
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default WeeklyLeaderboardList;
