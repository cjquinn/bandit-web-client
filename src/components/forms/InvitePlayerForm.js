import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Input from '../shared/Input';

const InvitePlayerForm = ({ handleSubmit, error, submitting }) => (
    <form
        className="o-container u-vspace-3bl"
        onSubmit={handleSubmit}
    >
        {error && ''}
        
        <div className="u-ph-1bl u-vspace-3bl">
            <Field
                component={Input}
                name="user[email]"
                label="Email:"
                type="email"
            />
        </div>

        <button
            className="c-button c-button--default"
            type="submit"
            disabled={submitting}
        >
            Invite player
        </button>
    </form>
);

InvitePlayerForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default InvitePlayerForm;
