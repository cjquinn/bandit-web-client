import PropTypes from 'prop-types';
import React from 'react';

// Components
import Notification from '../shared/Notification';

const InputField = ({ input, label, meta, placeholder = '', autocomplete = '', type }) => (
    <fieldset className="u-pos-relative">
        <input
            {...input}
            type={type}
            placeholder={placeholder}
            autocomplete={autocomplete}
        />

        <label>{label}</label>

        {meta && meta.error &&
            <Notification
                message={meta.error}
                type="error"
            />
        }
    </fieldset>
);

InputField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default InputField;
