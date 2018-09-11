import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';

const Match = ({ handleClickCancel, isDeleting, match, userId }) => (
    <section className="o-container u-vspace-3bl">
        {match.deleted &&
            <p className="u-flex u-ai-center u-weight-bold u-color-hotmelon">
                This match was removed.
            </p>
        }

        <div className="u-vspace-2bl">
            <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
                <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold u-vspace-1bl">
                    <Link to={`/players/${match.player_a_id}`}>
                        <PlayerPhoto
                            player={match.player_a}
                            width="4bl"
                        />
                    </Link>

                    <dt>
                        <h2 className="u-color-paste">
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

                    {match.player_a_snapshot &&
                        <dd className={`u-color-${match.player_a_snapshot.difference >= 0 ? 'win' : 'loss'}`}>
                            {match.player_a_snapshot.difference} <abbr title="rating points">pts.</abbr>
                        </dd>
                    }
                </li>

                <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold05 u-vspace-1bl">
                    <Link to={`/players/${match.player_b_id}`}>
                        <PlayerPhoto
                            player={match.player_b}
                            width="4bl"
                        />
                    </Link>

                    <dt>
                        <h2 className="u-color-paste">
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

                    {match.player_b_snapshot &&
                        <dd className={`u-color-${match.player_b_snapshot.difference >= 0 ? 'win' : 'loss'}`}>
                            {match.player_b_snapshot.difference} <abbr title="rating points">pts.</abbr>
                        </dd>
                    }
                </li>
            </dl>

            <dl className="u-flex u-ai-center u-jc-between u-ph-1bl">
                <li className="u-flex u-ai-center u-hspace-05bl">
                    <dt>Submitted by </dt>
                    <dd>
                        <PlayerPhoto player={match.player_a} /> <span className="o-dictate">{match.player_a.user.first_name} {match.player_a.user.last_name}</span>
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
                className="c-button c-button--warning u-mt-1bl"
                disabled={isDeleting}
                onClick={handleClickCancel}
            >
                Cancel match
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
