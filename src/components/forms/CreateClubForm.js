import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';

const CreateClubForm = props => (
    <Form
        buttonText="Create club"
        {...props}
    >
        <Field
            component={InputField}
            name="name"
            label="Name:"
            type="text"
        />
    </Form>
);

CreateClubForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default CreateClubForm;
