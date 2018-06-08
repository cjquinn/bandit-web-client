import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Svg from '../shared/Svg';
import PlayerPhoto from '../shared/PlayerPhoto';

// Sprites
import rating from '../../assets/svg/sprite/rating.svg';

const PlayersList = ({ players }) => (
    <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
        {players.map(player =>
            <li
                key={player.id}
                className="u-bgcolor-fold"
            >
                <Link
                    className="u-flex u-ai-center u-pv-1bl u-ph-1bl"
                    to={`/players/${player.id}`}
                >
                    <div className="u-mr-1bl">
                        <PlayerPhoto player={player} />
                    </div>

                    <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                        <div className="u-grow-1 u-vspace-03r">
                            <dt className="u-color-paste">{player.user.name}</dt>

                            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
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
                            </dd>
                        </div>
                    </dl>
                </Link>
            </li>
        )}
    </ol>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayersList;
