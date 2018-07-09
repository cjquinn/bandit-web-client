import PropTypes from 'prop-types';
import React from 'react';

const Notification = ({ message, type }) => (
    <div
        className={`c-notification c-notification--${type}`}
        role="alert"
    >
        <p>{message}</p>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Notification;
