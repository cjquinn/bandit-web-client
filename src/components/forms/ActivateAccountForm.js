import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const ActivateAccountForm = props => (
    <Form
        buttonText="Activate account"
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
                component={InputField}
                name="password"
                label="Password:"
                type="password"
            />
        </div>
    </Form>
);

ActivateAccountForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default ActivateAccountForm;
