import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import InputField from '../fields/InputField';

const ResetPasswordForm = ({ handleSubmit, error, submitting }) => (
    <form
        className="o-container u-vspace-3bl"
        onSubmit={handleSubmit}
    >
        {error && ''}
        
        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={InputField}
                name="password"
                label="Password:"
                type="password"
            />
        </div>

        <button
            className="c-button c-button--default"
            type="submit"
            disabled={submitting}
        >
            Reset password
        </button>
    </form>
);

ResetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default ResetPasswordForm;
