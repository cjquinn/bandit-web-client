import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Breakdown from './Breakdown';
import Header from './Header';
import Loading from '../../shared/Loading';
import Rating from './Rating';

const Match = ({ handleClickCancel, isDeleting, match, userId }) => {
    if (!match) {
        return <Loading />;
    }

    return (
        <section className="o-container">
            <div className="u-vspace-3bl">
                {match.deleted &&
                    <p className="u-ph-1bl u-flex u-ai-center u-weight-bold u-color-hotmelon">
                        This match was deleted.
                    </p>
                }

                <dl className={`u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ${match.deleted && 'u-opac-05'}`}>
                    <Header
                        player={match.player_a}
                        score={match.player_a_score}
                        snapshot={match.player_a_snapshot}
                    />

                    <Header
                        player={match.player_b}
                        score={match.player_b_score}
                        snapshot={match.player_b_snapshot}
                    />
                </dl>

                <section className="u-vspace-1bl">
                    <div className="u-ph-1bl">
                        <h3 className="u-weight-bold u-size-h3 u-color-white">Match</h3>
                    </div>

                    <div className="c-match-table">
                        <div className="c-match-table__head">
                            <h4 className="c-match-table__subtitle">Games</h4>
                        </div>

                        {!match.player_a_breakdown && !match.player_b_breakdown &&
                            <Loading />
                        }

                        <Breakdown
                            breakdown={match.player_a_breakdown}
                            isPlayerA={true}
                            playerName={match.player_a.user.first_name}
                            playerAScore={match.player_a_score}
                            playerBScore={match.player_b_score}
                            snapshot={match.player_a_snapshot}
                        />

                        <Breakdown
                            breakdown={match.player_b_breakdown}
                            isPlayerA={false}
                            playerName={match.player_b.user.first_name}
                            playerAScore={match.player_a_score}
                            playerBScore={match.player_b_score}
                            snapshot={match.player_b_snapshot}
                        />
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
                                <Rating
                                    level={match.player_a_snapshot.previous_level}
                                    playerRating={match.player_a_snapshot.previous_rating}
                                />
                            </li>
                        </ol>

                        <ol className="c-match-table__column">
                            <li className="c-match-table__cell u-fd-col u-vspace-05bl">
                                <Rating
                                    level={match.player_b_snapshot.previous_level}
                                    playerRating={match.player_b_snapshot.previous_rating}
                                />
                            </li>
                        </ol>

                        <div className="c-match-table__head">
                            <h4 className="c-match-table__subtitle">New Rating</h4>
                        </div>

                        <ol className="c-match-table__column">
                            <li className="c-match-table__cell u-fd-col u-vspace-05bl">
                                <Rating
                                    level={match.player_a_snapshot.level}
                                    playerRating={match.player_a_snapshot.rating}
                                    snapshot={match.player_a_snapshot}
                                />
                            </li>
                        </ol>

                        <ol className="c-match-table__column">
                            <li className="c-match-table__cell u-fd-col u-vspace-05bl">
                                <Rating
                                    level={match.player_b_snapshot.level}
                                    playerRating={match.player_b_snapshot.rating}
                                    snapshot={match.player_b_snapshot}
                                />
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
};

Match.propTypes = {
    handleClickCancel: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired,
    match: PropTypes.object,
    userId: PropTypes.number.isRequired
};

export default Match;
