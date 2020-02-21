import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../../shared/PlayerPhoto';

// Sprites
import { ReactComponent as Rating } from '../../../assets/svg/sprite/rating.svg';

const Players = ({ challenge }) => (
    <>
        <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">
            <PlayerPhoto 
                player={challenge.player_a}
                width="3bl"
            />

            <dt className="u-ml-1bl u-size-h4 u-weight-bold u-ws-no">
                <span className="o-dictate">{challenge.player_a.user.display_name}</span>
                <span className="u-inline-block u-width-4ch u-align-center">vs</span>
                <span className="o-dictate">{challenge.player_b && challenge.player_b.user.display_name}</span>
            </dt>

            <div className="u-ml-1bl">
                <PlayerPhoto 
                    player={challenge.player_b}
                    width="3bl"
                />
            </div>
        </div>

        <Link className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize u-vspace-03r" to={`/players/${challenge.player_a_id}`}>
            <dt className="u-color-paste u-capitalize">{challenge.player_a.user.display_name}</dt>

            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                <span className="u-flex u-ai-center u-hspace-4px">
                    <Rating className="u-width-1bl u-height-auto" />

                    <span className="u-color-paste">
                        {challenge.player_a.rating} <span className="o-dictate">rating</span>
                    </span>
                </span>
            </dd>
        </Link>

        <Link className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-end u-fd-col u-jc-end u-align-right o-ellipsis u-capitalize u-vspace-03r" to={`/players/${challenge.player_b_id}`}>
            {challenge.player_b
                ? <>
                    <dt className="u-color-paste u-capitalize">{challenge.player_b.user.display_name}</dt>

                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Rating className="u-width-1bl u-height-auto" />

                            <span className="u-color-paste">
                                {challenge.player_b.rating} <span className="o-dictate">rating</span>
                            </span>
                        </span>
                    </dd>
                </>
                : <span className="c-go">View</span>
            }
        </Link>
    </>
);

Players.propTypes = {
    challenge: PropTypes.object.isRequired
};

export default Players;
