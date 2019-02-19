import PropTypes from 'prop-types';
import React from 'react';

// Components
import WeeklyLeaderboardItem from '../items/WeeklyLeaderboardItem';

const WeeklyLeaderboardList = ({ currentPlayerId, isFetching, playerId, players, userId }) => {

    <p>Monday 18th - Sunday 24th February</p>

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
        <div className="u-vspace-2bl">

            <dl className="c-weekly-progress u-ph-1bl">
                <dt className="c-weekly-progress__status">
                    <span className="o-dictate">This week's leaderboard is 1 day in.</span>
                    <progress className="c-weekly-progress__bar" value="1" max="7">14%</progress>
                </dt>

                <dd className="c-weekly-progress__start u-ws-no">
                    <span className="o-dictate">It started on </span>Monday 18th
                </dd>
                
                <dd className="c-weekly-progress__end u-ws-no">
                    <span className="o-dictate">It ends on </span>Sunday 24th
                </dd>
            </dl>

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
        </div>
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
