import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import Svg from '../shared/Svg';

// Sprite
import rating from '../../assets/svg/sprite/rating.svg';

const players = ['player_a', 'player_b'];

const Match = ({ handleClickCancel, isDeleting, match, userId }) => (
    <section className="o-container">
        <div className="u-vspace-3bl">
            {match.deleted &&
                <p className="u-ph-1bl u-flex u-ai-center u-weight-bold u-color-hotmelon">
                    This match was deleted.
                </p>
            }

            <dl className={`u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ${match.deleted && 'u-opac-05'}`}>
                {players.map(player =>
                    <li
                        key={player}
                        className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold"
                    >
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl u-vspace-1bl">
                            <Link to={`/players/${match[`${player}_id`]}`}>
                                <PlayerPhoto
                                    player={match[player]}
                                    width="4bl"
                                />
                            </Link>

                            <dt>
                                <h2 className="u-weight-bold u-color-paste u-capitalize">
                                    <Link to={`/players/${match[`${player}_id`]}`}>
                                        {match[player].user.first_name} {match[player].user.last_name}
                                    </Link>
                                </h2>
                            </dt>

                            <dd>
                                <p className="u-size-h1 u-color-white">
                                    {match[`${player}_score`]}
                                </p>
                            </dd>
                        </div>

                        <div className="u-flex u-fd-col u-ai-center u-vspace-05bl u-bgcolor-obsidian u-pv-2bl">
                            <span className="c-levels u-flex u-ai-center">
                                <span className={`c-level u-bgcolor-${match[player].level.slug}`}>
                                    {match[player].level.name}
                                </span>
                            </span>

                            <div className="u-flex u-ai-center u-hspace-4px">
                                <Svg
                                    sprite={rating}
                                    className="u-width-1bl u-height-auto"
                                />

                                <span className="u-color-paste">{match[player].rating} <span className="o-dictate">rating</span></span>&nbsp;
                            
                                {match[`${player}_snapshot`] &&
                                    <dd
                                        className={`c-points c-points--match c-points--${match[`${player}_snapshot`].difference === 0 ? 'neutral' : (match[`${player}_snapshot`].difference > 0 ? 'win' : 'loss')}`}
                                        title="rating points"
                                    >
                                        {match[`${player}_snapshot`].difference > 0 ? '+' : ''}
                                        {match[`${player}_snapshot`].difference}
                                    </dd>
                                }
                            </div>
                        </div>
                    </li>
                )}
            </dl>

            <section className="u-vspace-1bl">
                <div className="u-ph-1bl">
                    <h3 className="u-weight-bold u-size-h3 u-color-white">Match</h3>
                </div>

                <div className="c-match-table">
                    <div className="c-match-table__head">
                        <h4 className="c-match-table__subtitle">Games</h4>
                    </div>

                    {players.map(player =>
                        <ol
                            className="c-match-table__column"
                            key={player}
                        >
                            {(new Array(+match.player_a_score)).fill(undefined).map((_, i) =>
                                <li
                                    key={i}
                                    className="c-match-table__cell u-size-12px u-jc-between u-ai-center"
                                >
                                    <span className="o-dictate">${match[player].user.first_name}</span>
                                    <span>{player === 'player_a' ? 'Won' : 'Lost'}</span>
                                    <span className={`c-points c-points--game c-points--${player === 'player_a' ? 'win' : 'loss'}`}>
                                        {player === 'player_a' ? '+' : ''}{match[`${player}_breakdown`][player === 'player_a' ? 'win' : 'loss']}
                                    </span>
                                </li>
                            )}

                            {(new Array(+match.player_b_score)).fill(undefined).map((_, i) =>
                                <li
                                    key={i}
                                    className="c-match-table__cell u-size-12px u-jc-between u-ai-center"
                                >
                                    <span className="o-dictate">${match[player].user.first_name}</span>
                                    <span>{player === 'player_b' ? 'Won' : 'Lost'}</span>
                                    <span className={`c-points c-points--game c-points--${player === 'player_b' ? 'win' : 'loss'}`}>
                                        {player === 'player_b' ? '+' : ''}{match[`${player}_breakdown`][player === 'player_b' ? 'win' : 'loss']}
                                    </span>
                                </li>
                            )}

                            <li className="c-match-table__foot">
                                <span className="c-match-table__subtitle">Total</span>
                                <span className="u-ml-auto">
                                    <span className={`c-points c-points--match c-points--${match[`${player}_snapshot`].difference === 0 ? 'neutral' : (match[`${player}_snapshot`].difference > 0 ? 'win' : 'loss')}`}>
                                        {match[`${player}_snapshot`].difference > 0 ? '+' : ''}
                                        {match[`${player}_snapshot`].difference}
                                    </span>
                                </span>
                            </li>
                        </ol>
                    )}
                </div>
            </section>

            <section className="u-vspace-1bl">
                <div className="u-ph-1bl">
                    <h3 className="u-weight-bold u-size-h3 u-color-white">Ratings</h3>
                </div>

                <div className="c-match-table">
                    <div className="c-match-table__head">
                        <h4 className="c-match-table__subtitle">Last Rating</h4>
                    </div>

                    <ol className="c-match-table__column">
                        <li className="c-match-table__cell u-fd-col u-vspace-05bl">
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

                                <span className="u-color-paste">{match.player_a.rating} <span className="o-dictate">rating</span></span>
                            </div>
                        </li>

                        {/* <li className="c-match-table__cell u-fd-col">
                            <dt className="u-color-paste">Low Volatility</dt>
                            <dd className="u-color-steam u-size-13px">Unrated Opponent</dd>
                        </li> */}
                    </ol>

                    <ol className="c-match-table__column">
                        <li className="c-match-table__cell u-fd-col u-vspace-05bl">
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

                                <span className="u-color-paste">{match.player_a.rating} <span className="o-dictate">rating</span></span>
                            </div>
                        </li>

                        {/* <li className="c-match-table__cell u-fd-col">
                            <dt className="u-color-paste">High Volatility</dt>
                            <dd className="u-color-steam u-size-13px">New Player</dd>
                        </li> */}
                    </ol>

                    <div className="c-match-table__head">
                        <h4 className="c-match-table__subtitle">New Rating</h4>
                    </div>

                    <ol className="c-match-table__column">
                        <li className="c-match-table__cell u-fd-col u-vspace-05bl">
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
                                    // No idea how to do this efficiently :(
                                        
                                    <dd className=
                                    {`c-points c-points--match c-points--${match.player_a_snapshot.difference === 0 ? 'neutral' : (match.player_a_snapshot.difference > 0 ? 'win' : 'loss')}`}
                                    
                                    title="rating points">
                                        {match.player_a_snapshot.difference >= 0 ? '+' : ''}
                                        {match.player_a_snapshot.difference}
                                    </dd>
                                }
                            </div>
                        </li>
                    </ol>

                    <ol className="c-match-table__column">
                        <li className="c-match-table__cell u-fd-col u-vspace-05bl">
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
                                    // No idea how to do this efficiently :(
                                        
                                    <dd className=
                                    {`c-points c-points--match c-points--${match.player_b_snapshot.difference === 0 ? 'neutral' : (match.player_b_snapshot.difference > 0 ? 'win' : 'loss')}`}
                                    
                                    title="rating points">
                                        {match.player_b_snapshot.difference >= 0 ? '+' : ''}
                                        {match.player_b_snapshot.difference}
                                    </dd>
                                }
                            </div>
                        </li>
                    </ol>

                </div>
                
            </section>

            <dl className="u-ph-1bl u-vspace-05bl">
                <li>
                    <dt className="o-dictate">Submitted on </dt>
                    <dd>
                        {moment(match.created).format('dddd Do MMMM YYYY')}
                    </dd>
                </li>

                <li className="u-flex u-ai-center u-hspace-05bl u-size-12px u-color-steam">
                    <dt>Submitted by</dt><dd className=""><span className="u-capitalize">{match.player_a.user.first_name} {match.player_a.user.last_name}</span></dd>
                </li>
            </dl>

            {match.was_within24_hours && match.player_a.user_id === userId && !match.dispute && !match.deleted &&
                <button
                    className="c-button c-button--warning"
                    disabled={isDeleting}
                    onClick={handleClickCancel}
                >
                    Delete match
                </button>
            }
        </div>
    </section>
);

Match.propTypes = {
    handleClickCancel: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired
};

export default Match;
