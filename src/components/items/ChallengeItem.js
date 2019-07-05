import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';
import Template from '../shared/Template';

// Sprites
import rating from '../../assets/svg/sprite/rating.svg';

const ChallengeItem = ({ challenge }) => (
    <Link
        to={`/challenges/${challenge.id}`}
        className="u-block u-color-paste"
    >
        <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">
            <div>
                <p className="u-size-14px u-color-white u-weight-bold">
                    {challenge.moment.format('dddd HH:mm')}
                </p>
            </div>
            
            <div className="u-align-right">
                <p className="u-color-white u-size-13px u-weight-bold">
                    {challenge.moment.format('Do MMMM')}
                </p>
            </div>
        </div>

        <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">
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

            <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize u-vspace-03r">
                <dt className="u-color-paste u-capitalize">{challenge.player_a.user.display_name}</dt>

                <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                    <span className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            sprite={rating}
                            className="u-width-1bl u-height-auto"
                        />

                        <span className="u-color-paste">
                            {challenge.player_a.rating} <span className="o-dictate">rating</span>
                        </span>
                    </span>
                </dd>
            </div>

            <div className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-end u-fd-col u-jc-end u-align-right o-ellipsis u-capitalize u-vspace-03r">
                {challenge.player_b
                    ? <Template>
                        <dt className="u-color-paste u-capitalize">{challenge.player_b.user.display_name}</dt>

                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span className="u-flex u-ai-center u-hspace-4px">
                                <Svg
                                    sprite={rating}
                                    className="u-width-1bl u-height-auto"
                                />

                                <span className="u-color-paste">
                                    {challenge.player_b.rating} <span className="o-dictate">rating</span>
                                </span>
                            </span>
                        </dd>
                    </Template>
                    : <span className="c-go">Open</span>
                }
            </div>
        </div>
    </Link>
);

ChallengeItem.propTypes = {
    challenge: PropTypes.object.isRequired
};

export default ChallengeItem;
