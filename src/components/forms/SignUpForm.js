import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const SignUpForm = props => (
    <Form
        buttonText="Sign up"
        {...props}
    >   

        <div className="u-ph-1bl u-vspace-3bl">
            <div className="u-flex u-hspace-2bl">
                <Field
                    component={InputField}
                    name="founder[first_name]"
                    label="First name:"
                    type="text"
                />
                
                <Field
                    component={InputField}
                    name="founder[last_name]"
                    label="Last name:"
                    type="text"
                />
            </div>

            <Field
                component={InputField}
                name="name"
                label="Club name:"
                type="text"
                autocomplete="nope"
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
    </Form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default SignUpForm;
