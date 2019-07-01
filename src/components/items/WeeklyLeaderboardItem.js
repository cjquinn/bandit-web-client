import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Template from '../shared/Template';

const WeeklyLeaderboardItem = ({ player, position, userId }) => (
    <Template>
        {player.user_id === userId &&
            <div className="o-absfill u-shadow-you u-pointer-none"></div>
        }

        <Link
            to={`/players/${player.id}`}
            className="u-flex u-ai-center u-pv-1bl u-ph-1bl"
        >
            <div className="u-mr-1bl">
                <PlayerPhoto 
                    player={player}
                    width="3bl"
                />
            </div>

            <dl className="u-flex u-jc-between u-ai-center u-width-100pc">

                <dt className="u-color-paste u-size-h4 u-weight-bold u-ws-no u-order-2">#{position || player.position}</dt>

                <dd className="u-grow-1 u-vspace-03r u-order-1">
                    <dl>
                        <dt className="u-color-paste u-capitalize">{player.user.first_name} {player.user.last_name}</dt>

                        <dd className="u-flex u-ai-center u-hspace-4px u-size-13px">
                    
                        <span className=
                        {`c-points c-points--match c-points--${player.rating_change === 0 ? 'neutral' : (player.rating_change > 0 ? 'win' : 'loss')}`}
                        
                        title="rating points">
                            {player.rating_change >= 0 ? '+' : ''}
                            {player.rating_change}
                        </span>

                        <span><span className="o-dictate">with </span> {player.wins_change} wins</span>

                        <span><span className="o-dictate">and </span> {player.losses_change} losses</span>
                    </dd>
                    </dl>
                </dd>

                
            </dl>
        </Link>
    </Template>
);

WeeklyLeaderboardItem.propTypes = {
    player: PropTypes.object.isRequired,
    position: PropTypes.number,
    userId: PropTypes.number.isRequired
};

export default WeeklyLeaderboardItem;
