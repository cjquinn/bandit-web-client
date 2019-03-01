import PropTypes from 'prop-types';
import React from 'react';

// Components
import WeeklyLeaderboardItem from '../items/WeeklyLeaderboardItem';

const WeeklyLeaderboardList = ({ currentPlayerId, isFetching, playerId, players, userId }) => {
    if (!isFetching && players.length === 0) {
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No weekly leaderboard
                </p>
            
                <p>
                    {playerId
                        ? playerId === currentPlayerId
                            ? 'Play a match to join this week’s leaderboard.'
                            : 'This player hasn\'t played a match this week.'
                        : 'Play a match to open up this week’s leaderboard.'
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
                    className={`u-pos-relative u-bgcolor-fold ${playerId && player.id !== playerId && 'u-blur1px u-blur0@hover u-opac-05 u-opac-1@hover'}`}
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
