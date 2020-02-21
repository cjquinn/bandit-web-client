import PropTypes from 'prop-types';
import React from 'react';

// Sprites
import { ReactComponent as ArrowDown } from '../../assets/svg/sprite/arrow_down.svg';

const OrderPlayersControl = ({ handleChange, orderBy }) => (
    <div className="u-ph-1bl">

        <div className="u-pos-relative">
            <div className="c-select-field">
                <div className="c-select-field__select">
                    <div className="c-select-field__icon">
                        <ArrowDown className="c-select-field__svg" />
                    </div>
    
                    <select
                        className="c-select-field__input u-capitalize"
                        onChange={handleChange}
                        value={orderBy}
                    >
                        <optgroup label="Order players:">
                            <option value="a-z">A &ndash; Z</option>
                            <option value="rating">Highest Rating</option>
                            <option value="games">Most Games</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>
    </div>
);

OrderPlayersControl.propTypes = {
    handleChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired
};

export default OrderPlayersControl;
