import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';
import Template from '../shared/Template';

// Sprite
import rating from '../../assets/svg/sprite/rating.svg';

const AllTimeLeaderboardItem = ({ player, position, userId }) => (
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
                <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste">{player.user.display_name}</dt>

                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Svg
                                sprite={rating}
                                className="u-width-1bl u-height-auto"
                            />

                            <span className="u-color-paste">{player.rating} <span className="o-dictate">rating</span></span>
                        </span>

                        <span className={`u-uppercase u-color-${player.level.slug}`}>{player.level.name}</span>
                    </dd>
                </div>

                <dd className="u-color-paste u-size-h4 u-weight-bold u-ws-no">#{position}</dd>
            </dl>
        </Link>
    </Template>
);

AllTimeLeaderboardItem.propTypes = {
    player: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
};

export default AllTimeLeaderboardItem;
