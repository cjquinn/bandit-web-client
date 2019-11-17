import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Loading from '../shared/Loading';
import Notification from '../shared/Notification';
import ScoreField from '../fields/ScoreField';
import SelectField from '../fields/SelectField';

const AddMatchForm = ({ error, handleSubmit, invalid, isFetching, opponentOptions, playerA, playerB, submitting }) => {
    if (opponentOptions.length === 0) {
        if (isFetching) {
            return <Loading />;
        }

        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    No opponents
                </p>
            
                <p>You don&apos;t have any opponents.</p>
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
                    name="player_b_id"
                    label="Opponent"
                    options={opponentOptions}
                    placeholder="Select player"
                />

                {playerB &&
                    <ScoreField
                        playerA={playerA}
                        playerB={playerB}
                    />
                }
            </div>

            {playerB &&
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

AddMatchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    opponentOptions: PropTypes.array.isRequired,
    playerA: PropTypes.object.isRequired,
    playerB: PropTypes.object,
    submitting: PropTypes.bool.isRequired
};

export default AddMatchForm;
