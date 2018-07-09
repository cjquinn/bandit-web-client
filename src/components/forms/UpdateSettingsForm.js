import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const UpdateSettingsForm = props => (
    <Form
        buttonText="Update settings"
        {...props}
    >
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
            name="email"
            label="Email name:"
            type="text"
        />

        <div className="u-flex u-hspace-2bl">
            <Field
                component={InputField}
                name="current_password"
                label="Current password:"
                type="password"
            />
            
            <Field
                component={InputField}
                name="new_password"
                label="New password:"
                type="password"
            />
        </div>
    </Form>
);

UpdateSettingsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default UpdateSettingsForm;
