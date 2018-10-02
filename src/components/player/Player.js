import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';

// Sprites
import rating from '../../assets/svg/sprite/rating.svg';

const Player = ({ player }) => (
    <div className="o-container u-vspace-3bl">

        <header className="c-player u-flex u-fw-wrap u-ai-center u-ph-1bl">
            <div className="c-player__photo">
                <PlayerPhoto 
                    player={player}
                    width="4bl"
                />
            </div>

            <dl className="c-player__info u-flex u-vspace-06r">
                <dt>
                    <h1 className="u-size-h1 u-color-white">
                        {player.user.first_name} {player.user.last_name}
                    </h1>
                </dt>

                <dd className="u-flex u-ai-center u-hspace-8px u-size-15px">
                    <span className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            className="u-width-1bl u-height-auto"
                            sprite={rating}
                        />

                        <span className="u-color-paste">
                            {player.rating} <span className="o-dictate">rating</span>
                        </span>
                    </span>

                    <span className={`u-uppercase u-color-${player.level.slug}`}>
                        {player.level.name}
                    </span>

                    <span>
                        <span className="o-dictate">from</span> {player.games} game{player.games !== 1 ? 's' : ''}
                    </span>
                </dd>
            </dl>

            <a href={`mailto:${player.user.email}`} className="c-player__challenge c-go">Challenge</a>

        </header>

        <section className="u-vspace-1bl">
            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">
                    Stats <span className="u-weight-normal u-color-steam">mini</span>
                </h1>
            </header>

            <dl className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <li className="u-bgcolor-fold">
                    <dl className="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                        <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                            <dt className="u-color-paste u-weight-bold">Wins</dt>

                            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                <span className="u-color-paste">{player.wins}</span>
                            </dd>
                        </div>

                        <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                            <dt className="u-color-paste u-weight-bold">Losses</dt>

                            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                <span className="u-color-paste">{player.losses}</span>
                            </dd>
                        </div>

                        <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                            <dt className="u-color-paste u-weight-bold">Win Ratio</dt>

                            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                <span className="u-color-paste">{player.winRatio}</span>
                            </dd>
                        </div>
                    </dl>
                </li>

                <li className="u-bgcolor-fold">
                    <dl className="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">
                        <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                            <dt className="u-color-paste u-weight-bold">Highest Rating</dt>
                            <dd className="u-flex u-ai-center u-hspace-4px u-size-13px">
                                <Svg
                                    className="u-width-1bl u-height-auto"
                                    sprite={rating}
                                />

                                <span className="u-color-paste">{player.highest_rating}</span>
                            </dd>
                        </div>

                        {player.highest_level &&
                            <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                                <dt className="u-color-paste u-weight-bold">Highest Level</dt>

                                <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                    <div className="u-pos-relative" aria-hidden="true">
                                        <div className="c-player-photo u-width-1bl">
                                            <div className={`c-player-photo__level c-player-photo__level--only u-bgcolor-${player.highest_level.slug}`}></div>
                                        </div>
                                    </div>

                                    <span className={`u-uppercase u-color-${player.highest_level.slug}`}>
                                        {player.highest_level.name}
                                    </span>
                                </dd>
                            </div>
                        }

                        <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                            <dt className="u-color-paste u-weight-bold"></dt>
                            
                            <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                <span className="u-color-paste"></span>
                            </dd>
                        </div>
                    </dl>
                </li>
            </dl>
        </section>
    </div>
);

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;
