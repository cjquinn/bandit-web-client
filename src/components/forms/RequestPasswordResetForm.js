import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const RequestPasswordResetForm = props => (
    <Form
        buttonText="Reset password"
        {...props}
    >

        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={InputField}
                name="email"
                label="Email:"
                type="email"
            />
        </div>
    </Form>
);

RequestPasswordResetForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default RequestPasswordResetForm;
