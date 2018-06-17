import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import PlayerPhoto from '../shared/PlayerPhoto';
import PlayerSelectField from '../fields/PlayerSelectField';

const AddMatchForm = ({ handleSubmit, error, players, submitting, user }) => (
    <form
        className="o-container u-vspace-3bl"
        onSubmit={handleSubmit}
    >
        {error && ''}

        <div className="c-notification c-notification--info" role="alert">
            <p className="u-weight-bold">What’s the score?</p>

            <ol className="u-vspace-mt-">
                <li>You won <strong className="u-color-white">5 games</strong></li>
                <li>Your lost <strong className="u-color-white">3 games</strong></li>
                <li>Score is <strong className="u-color-white">5 &ndash; 3</strong></li>
            </ol>
        </div>

        <div className="u-vspace-2bl">
            <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste u-bgcolor-fold">
                <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">
                    <dt className="u-size-h4 u-weight-bold u-ws-no">
                        <Field
                            className="u-width-205bl u-line-2 u-align-center"
                            name="player_a_score"
                            component="input"
                            type="number"
                            placeholder="0"
                            min="0"
                        />
                         &ndash; 
                        <Field
                            className="u-width-205bl u-line-2 u-align-center"
                            name="player_b_score"
                            component="input"
                            type="number"
                            placeholder="0"
                            min="0"
                        />
                    </dt>
                </div>

                <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">
                    <PlayerPhoto player={user.player} />

                    <span className="o-ellipsis" aria-hidden="true">{user.name}</span>
                </div>

                <Field
                    name="player_b_id"
                    component={PlayerSelectField}
                    players={players}
                />
            </div>

            <div className="u-flex u-ai-center u-ph-1bl u-hspace-05bl u-size-14px">
                <span>Monday 11th January 2017</span>
            </div>
        </div>

        <button
            className="c-button c-button--default"
            type="submit"
            disabled={submitting}
        >
            Add match
        </button>
    </form>
);

AddMatchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    players: PropTypes.array.isRequired,
    submitting: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

export default AddMatchForm;
