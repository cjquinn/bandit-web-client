import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ id, label, name, type = 'text' }) => (
    <div>
        <label htmlFor={id}>{label}:</label>
        <input type={type} name={name} id={id} />
    </div>
);

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Input;
