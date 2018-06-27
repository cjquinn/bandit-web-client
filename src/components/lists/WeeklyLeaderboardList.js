import PropTypes from 'prop-types';
import React from 'react';

// Components
import WeeklyLeaderboardItem from '../items/WeeklyLeaderboardItem';

const WeeklyLeaderboardList = ({ isFetching, players, userId }) => (
    <section className="o-container">
        {!isFetching && players.length === 0 &&
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">Weekly Leaderboard has reset!</p>
            
                <p>Play a match to open up this week’s rankings.</p>
            </div>
        }

        {players.length > 0 &&
            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                {players.map((player, i) => (
                    <li
                        key={player.id}
                        className="u-pos-relative u-bgcolor-fold"
                    >
                        <WeeklyLeaderboardItem
                            player={player}
                            position={i + 1}
                            userId={userId}
                        />
                    </li>
                ))}
            </ol>
        }
    </section>
);

WeeklyLeaderboardList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default WeeklyLeaderboardList;
