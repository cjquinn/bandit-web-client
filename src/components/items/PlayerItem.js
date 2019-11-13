import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';
import Template from '../shared/Template';

// Sprites
import rating from '../../assets/svg/sprite/rating.svg';

const PlayerItem = ({ player, userId }) => (
    <Template>
        {player.user_id === userId &&
            <div className="o-absfill u-shadow-you u-pointer-none"></div>
        }
    
        <Link
            className="u-flex u-ai-center u-pv-1bl u-ph-1bl"
            to={`/players/${player.id}`}
        >
            <div className="u-mr-1bl">
                <PlayerPhoto 
                    player={player} 
                    width="3bl"
                />
            </div>

            <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste u-capitalize">{player.user.full_name}</dt>

                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        {player.games > 0 &&
                            (
                                <span className="u-flex u-ai-center u-hspace-8px">
                                    <span className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            className="u-width-1bl u-height-auto"
                                            sprite={rating}
                                        />

                                        <span className="u-color-paste">{player.rating} <span className="o-dictate">rating</span></span>
                                    </span>

                                    <span><span className="o-dictate">from</span> {player.games} games</span>
                                </span>
                            )
                        }

                        {player.games === 0 && <span className="u-uppercase u-color-level0">{player.level.name}</span>}
                    </dd>
                </div>
            </dl>
        </Link>
    </Template>
);

PlayerItem.propTypes = {
    player: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired
};

export default PlayerItem;
