import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';
import Template from '../shared/Template';

// Sprites
import rating from '../../assets/svg/sprite/rating.svg';

const createChallengeEmailSubject = clubName => encodeURIComponent(`Are you free for a match?${clubName ? ` - ${clubName}` : ''}`);

const createChallengeEmailBody = (challengerFirstName, opponentFirstName) => `Hi ${opponentFirstName},%0D%0A%0D%0AAre you free to play a match?%0D%0A%0D%0ALocation: %0D%0ATime: %0D%0A%0D%0AThanks,%0D%0A${challengerFirstName}`;

const Player = ({ club, player, user }) => (
    <div className="o-container u-vspace-3bl">

        <header className="c-player u-flex u-fw-wrap u-ai-center u-ph-1bl">
            <div className="c-player__photo">
                <PlayerPhoto 
                    player={player}
                    width="4bl"
                />
            </div>

            <dl className="c-player__info u-flex u-vspace-03r">
                <dt>
                    <h1 className="u-size-h1 u-color-white u-capitalize">
                        {player.user.first_name} {player.user.last_name}
                    </h1>
                </dt>

                <dd className="u-flex u-ai-center u-hspace-8px u-size-15px">
                    {player.games > 0 &&
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Svg
                                className="u-width-1bl u-height-auto"
                                sprite={rating}
                            />

                            <span className="u-color-paste">
                                {player.rating} <span className="o-dictate">rating</span>
                            </span>
                        </span>
                    }
                    
                    <span className='c-levels u-flex u-ai-center'>
                        {player.isBandit && 
                            <span className='c-level u-bgcolor-bandit'>
                                Bandit
                            </span>
                        }

                        <span className={`c-level u-bgcolor-${player.level.slug}`}>
                            {player.level.name}
                        </span>
                    </span>
                </dd>
            </dl>

            {player.id !== user.player.id &&
                <a href={`mailto:${player.user.email}?subject=${createChallengeEmailSubject(club && club.name)}&body=${createChallengeEmailBody(user.first_name, player.user.first_name)}`} className="c-player__challenge c-go">
                    Challenge
                </a>
            }
        </header>

        <section className="u-vspace-1bl">
            {player.games === 0 &&
                <div className="c-notification c-notification--alert">
                    <p className="u-weight-bold">
                        {player.id === user.player.id
                            ? 'You haven\'t played a match yet'
                            : `${player.user.first_name} hasn't played a match yet`
                        }
                    </p>
                
                    <p>
                        {player.id === user.player.id
                            ? 'Challenge your first opponent to start your career.'
                            : `Challenge ${player.user.first_name} to their first match`
                        }
                    </p>
                </div>
            }

            {player.games > 0 &&
                <Template>
                    <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                        <h1 className="u-size-h2 u-color-white">
                            Stats <span className="u-weight-normal u-color-steam">mini</span>
                        </h1>
                    </header>

                    <dl className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                        <li className="u-bgcolor-fold">
                            <dl className="u-flex u-jc-between u-ai-center u-fw-wrap u-width-100pc">

                                <div className="u-grow-1 u-basis-0 u-vspace-03r u-pv-1bl u-ph-1bl">
                                    <dt className="u-color-paste u-weight-bold">Games</dt>

                                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                                        <span className="u-color-paste">{player.games}</span>
                                    </dd>
                                </div>

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
                                    <dt className="u-color-paste u-weight-bold">Ratio</dt>

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
                                            <span className={`c-level u-uppercase u-bgcolor-${player.highest_level.slug}`}>
                                                {player.highest_level.name}
                                            </span>
                                        </dd>
                                    </div>
                                }
                            </dl>
                        </li>
                    </dl>
                </Template>
            }
        </section>
    </div>
);

Player.propTypes = {
    club: PropTypes.object,
    player: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default Player;
