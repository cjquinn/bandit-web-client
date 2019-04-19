import moment from 'moment';
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

    const momentToday = moment();
    const daysPerWeek = 7;
    // Moment day starts on Sunday at 0...
    const day = momentToday.format('d') || daysPerWeek;

    return (
        <div className="u-vspace-2bl">
            <dl className="c-weekly-progress u-ph-1bl">
                <dt className="c-weekly-progress__status">
                    <span className="o-dictate">{`This week's leaderboard is ${day} day${day !== 1 ? 's' : ''} in.`}</span>
                    <progress className="c-weekly-progress__bar" value={day} max={daysPerWeek}>
                        {`${(day / daysPerWeek * 100).toFixed(2)}%`}
                    </progress>
                </dt>

                <dd className="c-weekly-progress__start u-ws-no">
                    <span className="o-dictate">It started on </span>{momentToday.startOf('isoWeek').format('dddd Do')}
                </dd>
                
                <dd className="c-weekly-progress__end u-ws-no">
                    <span className="o-dictate">It ends on </span>{momentToday.endOf('isoWeek').format('dddd Do')}
                </dd>
            </dl>

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
