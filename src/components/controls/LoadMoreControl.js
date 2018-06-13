import PropTypes from 'prop-types';
import React from 'react';

const LoadMoreControl = ({ handleClick, hasMore, isFetching }) => {
    if (!hasMore) {
        return null;
    }

    return (
        <button
            className="c-button c-button--default"
            onClick={handleClick}
            disabled={isFetching}
        >
            Load more
        </button>
    );
};

LoadMoreControl.propTypes = {
    handleClick: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default LoadMoreControl;
