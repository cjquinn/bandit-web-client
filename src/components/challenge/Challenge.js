import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

// Actions
import { acceptChallenge, deleteChallenge, reportChallenge, withdrawChallenge } from '../../store/byClubId/byPlayerId/challenge/actions';

// Components
import Button from '../shared/Button';
import Loading from '../shared/Loading';
import Player from '../player/Player';
import Players from '../items/ChallengeItem/Players';
import Template from '../shared/Template';

// HOCs
import withAction from '../../hocs/withAction';

// Selectors
import { getChallengeId } from '../../store/props/selectors';

// Containers
const AcceptChallengeButton = withAction(Button, props => acceptChallenge(getChallengeId(props)));
const DeleteChallengeButton = withAction(Button, props => deleteChallenge(getChallengeId(props)));
const ReportChallengeButton = withAction(Button, props => reportChallenge(getChallengeId(props)));
const WithdrawChallengeButton = withAction(Button, props => withdrawChallenge(getChallengeId(props)));

const Challenge = ({ challenge, user }) => {
    if (!challenge) {
        return <Loading />;
    }

    return (
        <Template>
            <div className="o-container u-ph-1bl u-vspace-2bl">
                <Link
                    to={`/challenges/${challenge.player_b_id ? 'accepted' : 'open'}`}
                    className="c-go"
                >
                    Back to challenges
                </Link>
            </div>

            <header className="o-container u-ph-1bl">
                <h1 className="u-size-h1 u-color-white">
                    {challenge.player_b_id ? 'Accepted' : 'Open'} Challenge
                </h1>
            </header>

            <hr className="c-hr" />

            <div className="o-container u-vspace-3bl">
                <dl className="u-vspace-2bl u-ph-1bl">
                    <div className="u-vspace-03r">
                        <dt className="u-size-h3 u-color-white">Date:</dt>
                        <dd>{challenge.moment.format('dddd HH:mm - Do MMMM')}</dd>
                    </div>

                    <div className="u-vspace-03r">
                        <dt className="u-size-h3 u-color-white">Location:</dt>
                        <dd>{challenge.location}</dd>
                    </div>
                </dl>

                {!challenge.player_b_id
                    ? (
                        <Link to={`/players/${challenge.player_a_id}`}>
                            <Player player={challenge.player_a} user={user} cta={false} />
                        </Link>
                    )
                    : <Players challenge={challenge} />
                }
            </div>

            <div className="u-ph-1bl u-vspace-3bl">
                {!challenge.player_b_id && user.id !== challenge.player_a.user_id &&
                    <AcceptChallengeButton type="default">
                        Accept challenge
                    </AcceptChallengeButton>
                }

                {challenge.player_b_id && [challenge.player_a.user_id, challenge.player_b.user_id].indexOf(user.id) !== -1 &&
                    <Template>
                        <a
                            className="c-button c-button--default"
                            href={`mailto:${user.id === challenge.player_a.user_id
                                ? challenge.player_b.user.email
                                : challenge.player_a.user.email
                            }`}
                        >
                            Contact {user.id === challenge.player_a.user_id
                                ? challenge.player_b.user.first_name
                                : challenge.player_a.user.first_name
                            }
                        </a>

                        {challenge.moment < moment() &&
                            <Template>
                                <button
                                    className="c-button c-button--default"
                                >
                                    Submit match score
                                </button>

                                <ReportChallengeButton type="warning">
                                    Report opponent
                                </ReportChallengeButton>
                            </Template>
                        }

                        {user.id === challenge.player_b.user_id &&
                            <WithdrawChallengeButton type="warning">
                                Withdraw from challenge
                            </WithdrawChallengeButton>
                        }
                    </Template>
                }

                {user.id === challenge.player_a.user_id &&
                    <DeleteChallengeButton type="warning">
                        Cancel challenge
                    </DeleteChallengeButton>
                }
            </div>
        </Template>
    );
};

Challenge.propTypes = {
    challenge: PropTypes.object,
    user: PropTypes.object.isRequired
};

export default Challenge;
