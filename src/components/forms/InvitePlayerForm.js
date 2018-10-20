import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const InvitePlayerForm = props => (
    <Form
        buttonText="Invite player"
        {...props}
    >
        <div className="u-ph-1bl">
            <Field
                component={InputField}
                name="user[email]"
                label="Email:"
                type="email"
            />
        </div>
    </Form>
);

InvitePlayerForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default InvitePlayerForm;
