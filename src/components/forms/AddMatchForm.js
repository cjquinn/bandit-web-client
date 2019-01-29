import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import PlayerPhoto from '../shared/PlayerPhoto';
import PlayerSelectField from '../fields/PlayerSelectField';

const AddMatchForm = ({ players, user, ...props }) => (
    <Form
        buttonText="Add match"
        {...props}
    >
        <div className="u-vspace-3bl">
            <div className="u-vspace-2bl">
                <div className="c-add-match u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste u-bgcolor-fold">
                    <div className="c-add-match__player c-add-match__player--you u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">
                        <dt className="u-size-h4 u-weight-bold u-ws-no u-hspace-05bl">
                            <Field
                                className="c-score-input u-width-205bl u-line-2 u-align-center"
                                name="player_a_score"
                                component="input"
                                type="number"
                                placeholder="0"
                                min="0"
                            />
                            <span>&ndash;</span> 
                            <Field
                                className="c-score-input u-width-205bl u-line-2 u-align-center"
                                name="player_b_score"
                                component="input"
                                type="number"
                                placeholder="0"
                                min="0"
                            />
                        </dt>
                    </div>

                    <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left">

                        <div className="c-add-match__photo c-add-match__photo--you u-mr-1bl">
                            <PlayerPhoto 
                                player={user.player} 
                                width="2bl"
                            />
                        </div>

                        <span className="o-ellipsis" aria-hidden="true">{user.display_name}</span>
                    </div>

                    <Field
                        name="player_b_id"
                        component={PlayerSelectField}
                        players={players}
                    />
                </div>

                <hr className="c-hr" />

                <div className="u-ph-1bl">
                    <details className="c-notification c-notification--info" role="alert">
                        <summary><p className="u-weight-bold">How is a match scored?</p></summary>

                        <p>Each game won by a player makes up their score.</p>

                        <ol className="u-pv-1bl u-line-105">
                            <li>You won <strong className="u-color-white">5 games</strong></li>
                            <li>You lost <strong className="u-color-white">3 games</strong></li>
                            <li>Match score is <strong className="u-color-white">5 &ndash; 3</strong></li>
                        </ol>
                    </details>
                </div>
            </div>
        </div>
    </Form>
);

AddMatchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    players: PropTypes.array.isRequired,
    submitting: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

export default AddMatchForm;
