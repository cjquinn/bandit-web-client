import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import CheckboxField from '../fields/CheckboxField';
import Form from './Form';

const AcceptTermsForm = props => (
    <>
        <Form
            buttonText="Continue"
            {...props}
        >   
            <div className="u-ph-1bl u-vspace-2bl">
                <p>Our Terms of Service have been updated. Please accept the new terms to continue using Bandit Match.</p>

                <Field
                    component={CheckboxField}
                    type="checkbox"
                    name="has_accepted_terms"
                    label="I accept the Terms of Service"
                />
            </div>
        </Form>

        <hr className="c-hr" />
    </>
);

AcceptTermsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default AcceptTermsForm;
