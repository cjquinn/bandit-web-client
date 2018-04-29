import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ input, label, meta, placeholder = '', type }) => (
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

Input.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Input;
