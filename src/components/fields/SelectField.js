import PropTypes from 'prop-types';
import React from 'react';

// Components
import Notification from '../shared/Notification';

// Sprites
import { ReactComponent as ArrowDown } from '../../assets/svg/sprite/arrow_down.svg';

const SelectField = ({ input, label, meta: { error, touched }, options, placeholder }) => (
    <fieldset className="u-pos-relative">
        <div className="c-select-field">
            <div className="c-select-field__select">
                <div className="c-select-field__icon">
                    <ArrowDown className="c-select-field__svg" />
                </div>

                <select
                    {...input}
                    className="c-select-field__input u-capitalize"
                >
                    <option value={null}>
                        {placeholder}
                    </option>

                    {options.map(option =>
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    )}
                </select>
            </div>

            <label className="c-select-field__label u-ph-1bl">{label}:</label>
        </div>

        {error && touched &&
            <Notification
                message={error}
                type="error"
            />
        }
    </fieldset>
);

SelectField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default SelectField;
