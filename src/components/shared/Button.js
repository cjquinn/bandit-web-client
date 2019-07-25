import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, disabled, onClick, type }) => (
    <button
        className={`c-button c-button--${type}`}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
