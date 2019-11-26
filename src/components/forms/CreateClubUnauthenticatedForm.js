import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

// Components
import CheckboxField from '../fields/CheckboxField';
import Form from './Form';
import InputField from '../fields/InputField';

const CreateClubUnauthenticatedForm = props => (
    <Form
        buttonText="Create club"
        {...props}
    >   

        <div className="u-ph-1bl u-vspace-3bl">
            <div className="u-flex u-hspace-2bl">
                <Field
                    component={InputField}
                    name="founder.first_name"
                    label="First name:"
                    type="text"
                />
                
                <Field
                    component={InputField}
                    name="founder.last_name"
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
                name="founder.email"
                label="Email:"
                type="email"
            />

            <Field
                component={InputField}
                name="founder.password"
                label="Password:"
                type="password"
            />

            <Field
                component={CheckboxField}
                name="founder.has_accepted_terms"
                label="Terms of Service"
            >
                I accept the <Link className="u-color-playdough" to="/terms-of-service">terms</Link>
            </Field>
        </div>
    </Form>
);

CreateClubUnauthenticatedForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default CreateClubUnauthenticatedForm;
