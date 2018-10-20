import PropTypes from 'prop-types';
import React from 'react';

const OrderPlayersControl = ({ handleChange, orderBy }) => (
    <div className="u-ph-1bl">
        <select
            className="u-color-playdough"
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
);

OrderPlayersControl.propTypes = {
    handleChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired
};

export default OrderPlayersControl;
