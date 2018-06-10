import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import InputField from '../fields/InputField';

const SignUpForm = ({ handleSubmit, error, submitting }) => (
    <form
        className="o-container u-vspace-3bl"
        onSubmit={handleSubmit}
    >
        {error && ''}
        
        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={InputField}
                name="name"
                label="Club name:"
                type="text"
            />

            <Field
                component={InputField}
                name="founder[name]"
                label="Your name:"
                type="text"
            />

            <Field
                component={InputField}
                name="founder[email]"
                label="Email:"
                type="email"
            />

            <Field
                component={InputField}
                name="founder[password]"
                label="Password:"
                type="password"
            />
        </div>

        <button
            className="c-button c-button--default"
            type="submit"
            disabled={submitting}
        >
            Sign up
        </button>
    </form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default SignUpForm;
