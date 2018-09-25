import PropTypes from 'prop-types';
import React from 'react';

const Flash = ({ handleClick, message, type }) => (
    <div className="o-container">
        <button
            type="button"
            className={`c-notification c-notification--${type} c-notification--global`}
            role="alert"
            onClick={handleClick}
        >
            <div className="o-container">
                <p className="u-weight-bold">{message}</p>
            </div>
        </button>
    </div>
);

Flash.propTypes = {
    handleClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Flash;
