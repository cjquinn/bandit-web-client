import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, type, ...props }) => (
    <button
        className={`c-button c-button--${type}`}
        {...props}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
