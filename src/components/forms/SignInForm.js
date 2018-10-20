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
        <div className="u-ph-1bl u-vspace-3bl">
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
        </div>
    </Form>
);

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default SignInForm;
