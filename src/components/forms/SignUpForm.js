import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

// Components
import CheckboxField from '../fields/CheckboxField';
import Form from './Form';
import EmailField from '../fields/EmailField';
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
                    name="first_name"
                    label="First name:"
                    type="text"
                />
                
                <Field
                    component={InputField}
                    name="last_name"
                    label="Last name:"
                    type="text"
                />
            </div>

            <Field
                component={EmailField}
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

            <Field
                component={CheckboxField}
                type="checkbox"
                name="has_accepted_terms"
                label={<>I accept the <Link className="u-color-playdough" to="/terms-of-service">Terms of Service</Link></>}
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
