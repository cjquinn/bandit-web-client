import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';

const DatedMatchesList = ({ matches }) => matches.map(({ date, matches }, i) => (
    <section key={i} className="o-container">
        <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">{date}</h1>
        </header>

        <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            {matches.map(match => (
                <li
                    key={match.id}
                    className="u-pos-relative u-bgcolor-fold"
                >
                    <Link
                        to={`/matches/${match.id}`}
                        className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste"
                    >
                        <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">
                            <PlayerPhoto player={match.player_a} />

                            <dt className="u-size-h4 u-weight-bold u-ws-no">
                                <span className="o-dictate">{match.player_a.user.name}</span>
                                <span className="u-inline-block u-width-2ch u-align-right u-ml-1bl">{match.player_a_score}</span>
                                <span className="u-inline-block u-width-2ch u-align-center">&ndash;</span>
                                <span className="o-dictate">{match.player_b.user.name}</span>
                                <span className="u-inline-block u-width-2ch u-align-left">{match.player_b_score}</span>
                            </dt>

                            <div className="u-ml-1bl">
                                <PlayerPhoto player={match.player_b} />
                            </div>
                        </div>

                        <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis">
                            <span aria-hidden="true">{match.player_a.user.name}</span>
                        </div>


                        <div className="u-grow-1 u-basis-0 u-order-3 u-ml-1bl u-align-right o-ellipsis">
                            <span aria-hidden="true">{match.player_b.user.name}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ol>
    </section>
));

DatedMatchesList.propTypes = {
    matches: PropTypes.array.isRequired
};

export default DatedMatchesList;
