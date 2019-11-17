import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

// Actions
import { acceptChallenge, deleteChallenge, reportChallenge, withdrawChallenge } from '../../store/byClubId/byPlayerId/challenge/actions';

// Components
import Button from '../shared/Button';
import Loading from '../shared/Loading';
import Players from '../items/ChallengeItem/Players';
import Template from '../shared/Template';

// Containers
import PlayerContainer from '../../containers/player/PlayerContainer';

// HOCs
import withAction from '../../hocs/withAction';

// Selectors
import { getChallengeId } from '../../store/props/selectors';

// Containers
const AcceptChallengeButton = withAction(Button, props => acceptChallenge(getChallengeId(undefined, props)));
const DeleteChallengeButton = withAction(Button, props => deleteChallenge(getChallengeId(undefined, props)));
const ReportChallengeButton = withAction(Button, props => reportChallenge(getChallengeId(undefined, props)));
const WithdrawChallengeButton = withAction(Button, props => withdrawChallenge(getChallengeId(undefined, props)));

const Challenge = ({ challenge, user }) => {
    if (!challenge) {
        return <Loading />;
    }

    return (
        <Template>
            {/* <div className="o-container u-ph-1bl u-vspace-2bl">
                <Link
                    to={`/challenges/${challenge.player_b_id ? 'accepted' : 'open'}`}
                    className="c-go"
                >
                    Back to challenges
                </Link>
            </div> */}

            <header className="o-container u-ph-1bl">
                <h1 className="u-size-h1 u-color-white">
                    {challenge.player_b_id ? 'Accepted' : 'Open'} Challenge
                </h1>
            </header>

            <div className="o-container u-vspace-3bl">
                <dl className="u-vspace-2bl u-ph-1bl">
                    <div className="u-vspace-03r">
                        <dt>Date:</dt>
                        <dd className="u-size-h3 u-color-white">{challenge.moment.format('dddd HH:mm - Do MMMM')}</dd>
                    </div>

                    <div className="u-vspace-03r">
                        <dt>Location:</dt>
                        <dd className="u-size-h3 u-color-white">{challenge.location}</dd>
                    </div>
                </dl>

                {!challenge.player_b_id
                    ? (
                        <Link className="u-block" to={`/players/${challenge.player_a_id}`}>
                            <PlayerContainer playerId={challenge.player_a_id} withCta={false} />
                        </Link>
                    )
                    : <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold">
                        <Players challenge={challenge} />
                    </div>
                }
            </div>

            <div className="o-container u-ph-1bl u-vspace-2bl">

                <div class="u-vspace-1bl">
                    {!challenge.player_b_id && user.id !== challenge.player_a.user_id &&
                        <AcceptChallengeButton
                            challengeId={challenge.id}
                            type="default"
                        >
                            Accept challenge
                        </AcceptChallengeButton>
                    }

                    {challenge.player_b_id && [challenge.player_a.user_id, challenge.player_b.user_id].indexOf(user.id) !== -1 &&
                        <Template>
                            <Link
                                className="c-button c-button--default"
                                to={`/matches/add/challenges/${challenge.id}`}
                            >
                                Submit match score
                            </Link>

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
                                <ReportChallengeButton
                                    challengeId={challenge.id}
                                    type="warning"
                                >
                                    Report {user.id === challenge.player_a.user_id
                                        ? challenge.player_b.user.first_name
                                        : challenge.player_a.user.first_name
                                    }
                                </ReportChallengeButton>
                            }

                            {user.id === challenge.player_b.user_id &&
                                <WithdrawChallengeButton
                                    challengeId={challenge.id}
                                    type="secondary warning"
                                >
                                    Withdraw from challenge
                                </WithdrawChallengeButton>
                            }
                        </Template>
                    }
                </div>

                {user.id === challenge.player_a.user_id &&
                    <DeleteChallengeButton
                        challengeId={challenge.id}
                        type="warning"
                    >
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
