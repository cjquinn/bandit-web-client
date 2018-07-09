import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const ResetPasswordForm = props => (
    <Form
        buttonText="Reset password"
        {...props}
    >
        <Field
            component={InputField}
            name="password"
            label="Password:"
            type="password"
        />
    </Form>
);

ResetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default ResetPasswordForm;
