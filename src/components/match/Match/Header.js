import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../../shared/PlayerPhoto';
import Rating from './Rating';

const Header = ({ player, score, snapshot }) => (
    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
        <div className="u-flex u-fd-col u-ai-center u-pv-3bl u-vspace-1bl">
            <Link to={`/players/${player.id}`}>
                <PlayerPhoto
                    player={snapshot}
                    width="4bl"
                />
            </Link>

            <dt>
                <h2 className="u-weight-bold u-color-paste u-capitalize">
                    <Link to={`/players/${player.id}`}>
                        {player.user.first_name} {player.user.last_name}
                    </Link>
                </h2>
            </dt>

            <dd>
                <p className="u-size-h1 u-color-white">
                    {score}
                </p>
            </dd>
        </div>

        <div className="u-flex u-fd-col u-ai-center u-vspace-05bl u-bgcolor-obsidian u-pv-2bl">
            <Rating
                level={snapshot.level}
                playerRating={snapshot.rating}
                snapshot={snapshot}
            />
        </div>
    </li>
);

Header.propTypes = {
    player: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
    snapshot: PropTypes.object.isRequired
};

export default Header;
