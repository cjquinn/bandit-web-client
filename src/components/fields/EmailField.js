import PropTypes from 'prop-types';
import React from 'react';

import InputField from './InputField';

const EmailField = ({ input, label, meta, placeholder = '', autoComplete = '', type }) => {
    if (meta && meta.initial) {
        return (
            <input
                {...input}
                type="hidden"
            />
        );
    }

    return (
        <InputField
            input={input}
            label={label}
            meta={meta}
            placeholder={placeholder}
            autoComplete={autoComplete}
            type={type}
        />
    );
};

EmailField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default EmailField;
