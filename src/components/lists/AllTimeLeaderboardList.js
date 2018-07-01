import PropTypes from 'prop-types';
import React from 'react';

// Components
import AllTimeLeaderboardItem from '../items/AllTimeLeaderboardItem';

const AllTimeLeaderboardList = ({ players, userId }) => (
    <section className="o-container">
        {players.length > 0 &&
            <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                {players.map((player, i) => (
                    <li
                        key={player.id}
                        className="u-pos-relative u-bgcolor-fold"
                    >
                        <AllTimeLeaderboardItem
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

AllTimeLeaderboardList.propTypes = {
    players: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
};

export default AllTimeLeaderboardList;
