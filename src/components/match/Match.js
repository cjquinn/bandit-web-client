import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';

// Sprite
import rating from '../../assets/svg/sprite/rating.svg';

const Match = ({ handleClickCancel, isDeleting, match, userId }) => (
    <section className="o-container">
        <div className="u-vspace-3bl">
            {match.deleted &&
                <p className="u-ph-1bl u-flex u-ai-center u-weight-bold u-color-hotmelon">
                    This match was deleted.
                </p>
            }

            <dl className={`u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ${match.deleted && 'u-opac-05'}`}>
                <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-3bl u-bgcolor-fold">

                    <div className="u-flex u-fd-col u-ai-center u-vspace-1bl">
                        <Link to={`/players/${match.player_a_id}`}>
                            <PlayerPhoto
                                player={match.player_a}
                                width="4bl"
                            />
                        </Link>

                        <dt>
                            <h2 className="u-color-paste u-capitalize">
                                <Link to={`/players/${match.player_a_id}`}>
                                    {match.player_a.user.first_name} {match.player_a.user.last_name}
                                </Link>
                            </h2>
                        </dt>

                        <dd>
                            <p className="u-size-h1 u-color-white">
                                {match.player_a_score}
                            </p>
                        </dd>
                    </div>

                    <span className={`c-levels u-flex u-ai-center`}>
                        <span className={`c-level u-bgcolor-warrior`}>
                            Warrior
                        </span>
                    </span>

                    <div className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            sprite={rating}
                            className="u-width-1bl u-height-auto"
                        />

                        <span className="u-color-paste">{match.player_a.rating} <span className="o-dictate">rating</span></span>&nbsp;
                    
                        {match.player_a_snapshot &&
                            <dd className={`u-color-${match.player_a_snapshot.difference >= 0 ? 'win' : 'loss'}`}>
                                {match.player_a_snapshot.difference >= 0 ? '+' : ''}
                                {match.player_a_snapshot.difference} <abbr title="rating points">pts.</abbr>
                            </dd>
                        }
                    </div>
                </li>

                <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-3bl u-bgcolor-fold05">

                    <div className="u-flex u-fd-col u-ai-center u-vspace-1bl">
                        <Link to={`/players/${match.player_b_id}`}>
                            <PlayerPhoto
                                player={match.player_b}
                                width="4bl"
                            />
                        </Link>

                        <dt>
                            <h2 className="u-color-paste u-capitalize">
                                <Link to={`/players/${match.player_b_id}`}>
                                    {match.player_b.user.first_name} {match.player_b.user.last_name}
                                </Link>
                            </h2>
                        </dt>

                        <dd>
                            <p className="u-size-h1 u-color-white">
                                {match.player_b_score}
                            </p>
                        </dd>
                    </div>

                        

                    <span className={`c-levels u-flex u-ai-center`}>
                        <span className={`c-level u-bgcolor-warrior`}>
                            Warrior
                        </span>
                    </span>

                    <div className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            sprite={rating}
                            className="u-width-1bl u-height-auto"
                        />

                        <span className="u-color-paste">{match.player_b.rating} <span className="o-dictate">rating</span></span>&nbsp;

                        {match.player_b_snapshot &&
                            <dd className={`u-color-${match.player_b_snapshot.difference >= 0 ? 'win' : 'loss'}`}>
                                {match.player_b_snapshot.difference >= 0 ? '+' : ''}
                                {match.player_b_snapshot.difference} <abbr title="rating points">pts.</abbr>
                            </dd>
                        }
                    </div>
                </li>
            </dl>

            <section>

                <div className="u-ph-1bl">
                    <h3 className="u-size-h4 u-color-white">Match</h3>
                </div>

                <table>
                    
                </table>

                
            </section>

            {/* <details className="c-notification c-notification--info" role="alert">
                <summary><span className="u-weight-bold">Ratings explained</span></summary>

                <div className=" u-pv-1bl u-vspace-1bl">
                    <p>Points are calculated for a game based on the two player&apos;s ratings.</p>

                    <p>When a higher rated player loses to a lower rated player, this creates the biggest shift in ratings:</p>
                    
                    <ul>
                        <li>The <strong className="u-color-white">higher rated</strong> player loses the maximum points.</li>
                        <li>The <strong className="u-color-white">lower rated</strong> player wins the maximum points</li>
                    </ul>

                    <p>When two equally rated players draw, their ratings will stay equal.</p>

                    <p>There are a few scenarios where the points awarded are less straightforward &mdash; we&apos;re working on a full FAQ to make this easier to understand.</p>
                </div>
            </details> */}

            <dl className="u-ph-1bl u-vspace-1bl">
                <li className="u-flex u-ai-center u-hspace-05bl u-fw-wrap">
                    <dt>Submitted by </dt>
                    <dd className="u-flex u-ai-center u-hspace-05bl">
                        <PlayerPhoto 
                            player={match.player_a} 
                            width="2bl"
                        /> <span className="u-capitalize">{match.player_a.user.first_name} {match.player_a.user.last_name}</span>
                    </dd>
                </li>

                <li>
                    <dt className="o-dictate">Submitted on </dt>
                    <dd>
                        {moment(match.created).format('dddd Do MMMM YYYY')}
                    </dd>
                </li>
            </dl>
        </div>

        {match.was_within24_hours && match.player_a.user_id === userId && !match.dispute && !match.deleted &&
            <button
                className="c-button c-button--warning"
                disabled={isDeleting}
                onClick={handleClickCancel}
            >
                Delete match
            </button>
        }
    </section>
);

Match.propTypes = {
    handleClickCancel: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired
};

export default Match;
