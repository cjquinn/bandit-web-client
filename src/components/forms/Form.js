import PropTypes from 'prop-types';
import React from 'react';

// Components
import Notification from '../shared/Notification';

const Form = ({ buttonText, children, error, handleSubmit, submitting }) => (
    <form
        className="o-container u-vspace-3bl"
        onSubmit={handleSubmit}
    >
        {error &&
            <Notification
                message={error}
                type="error"
            />
        }
        
        {children}

        <div className="u-ph-1bl">
            <button
                className="c-button c-button--default"
                type="submit"
                disabled={submitting}
            >
                {buttonText}
            </button>
        </div>
    </form>
);

Form.propTypes = {
    buttonText: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default Form;
