import PropTypes from 'prop-types';
import React from 'react';

// Components
import Notification from '../shared/Notification';

const CheckboxField = ({ description, input, label, meta: { error, touched } }) => (
    <fieldset className="u-pos-relative">
        <label className="c-checkbox u-flex u-ai-center u-hspace-1bl">
            <input
                {...input}
                className="c-checkbox__input"
                type="checkbox"
                value={true}
            />

            <div className="u-flex u-fd-col">
                <span className="c-checkbox__label">{label}</span>
                <span className="c-checkbox__description u-weight-normal u-color-grape u-size-14px">{description}</span>
            </div>
        </label>

        {error && touched &&
            <Notification
                message={error}
                type="error"
            />
        }
    </fieldset>
);

CheckboxField.propTypes = {
    description: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default CheckboxField;
