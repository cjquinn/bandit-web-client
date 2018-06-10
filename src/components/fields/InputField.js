import PropTypes from 'prop-types';
import React from 'react';

const InputField = ({ input, label, meta, placeholder = '', type }) => (
    <fieldset className="u-pos-relative">
        <input
            {...input}
            type={type}
            placeholder={placeholder}
        />

        <label>{label}</label>

        {meta && meta.error && ''}
    </fieldset>
);

InputField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default InputField;
