import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const CreateChallengeForm = props => (
    <Form
        buttonText="Create challenge"
        {...props}
    >
        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={InputField}
                name="match_datetime"
                label="Date and Time:"
                type="datetime-local"
            />

            <Field
                component={InputField}
                name="location"
                label="Location:"
                type="text"
            />
        </div>
    </Form>
);

CreateChallengeForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default CreateChallengeForm;
