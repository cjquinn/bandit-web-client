import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const SignInForm = props => (
    <Form
        buttonText="Sign in"
        {...props}
    >
        <Field
            component={InputField}
            name="email"
            label="Email:"
            type="email"
        />

        <Field
            component={InputField}
            name="password"
            label="Password:"
            type="password"
        />
    </Form>
);

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default SignInForm;
