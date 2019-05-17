import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const CreateClubAuthenticatedForm = props => (
    <Form
        buttonText="Create club"
        {...props}
    >

        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={InputField}
                name="name"
                label="Name:"
                type="text"
            />
        </div>
    </Form>
);

CreateClubAuthenticatedForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default CreateClubAuthenticatedForm;
