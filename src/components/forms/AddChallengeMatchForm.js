import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Loading from '../shared/Loading';
import Notification from '../shared/Notification';
import ScoreField from '../fields/ScoreField';
import SelectField from '../fields/SelectField';

const AddChallengeMatchForm = ({ challenge, challengeOptions, currentPlayerId, error, handleSubmit, invalid, isFetching, submitting }) => {
    if (challengeOptions.length === 0) {
        if (isFetching) {
            return <Loading />;
        }

        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No challenges
                </p>
            
                <p>You don&apos;t have any accepted challenges.</p>
            </div>
        );
    }

    return (
        <form
            className="u-vspace-3bl"
            onSubmit={handleSubmit}
        >
            {error &&
                <Notification
                    message={error}
                    type="error"
                />
            }
            
            <div className="u-vspace-2bl">
                <Field
                    component={SelectField}
                    name="challenge.id"
                    label="Challenge"
                    options={challengeOptions}
                    placeholder="Select challenge"
                />

                {challenge &&
                    <ScoreField
                        playerA={
                            challenge.player_a_id === currentPlayerId
                                ? challenge.player_a
                                : challenge.player_b
                        }
                        playerB={
                            challenge.player_a_id === currentPlayerId
                                ? challenge.player_b
                                : challenge.player_a
                        }
                    />
                }
            </div>

            {challenge &&
                <div className="u-ph-1bl">
                    <button
                        className="c-button c-button--default"
                        type="submit"
                        disabled={invalid || submitting}
                    >
                        Add match
                    </button>
                </div>
            }
        </form>
    );
};

AddChallengeMatchForm.propTypes = {
    challenge: PropTypes.object,
    challengeOptions: PropTypes.array.isRequired,
    currentPlayerId: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default AddChallengeMatchForm;
