import PropTypes from 'prop-types';
import React from 'react';

// Components
import AllTimeLeaderboardItem from '../items/AllTimeLeaderboardItem';

const AllTimeLeaderboardList = ({ isFetching, players, playerId, userId }) => {
    if (!isFetching && players.length === 0) {
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No all time leaderboard
                </p>
            
                <p>Challenge an opponent and add the first match.</p>
            </div>
        );
    }

    return (
        <section className="o-container">
            {players.length > 0 &&
                <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    {players.map(player => (
                        <li
                            key={player.id}
                            className={`u-pos-relative u-bgcolor-fold ${playerId && player.id !== playerId && 'u-blur-tiny u-blur0@hover u-opac-05 u-opac-1@hover'}`}
                        >
                            <AllTimeLeaderboardItem
                                player={player}
                                userId={userId}
                            />
                        </li>
                    ))}
                </ol>
            }
        </section>
    );
};

AllTimeLeaderboardList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    playerId: PropTypes.number,
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default AllTimeLeaderboardList;
