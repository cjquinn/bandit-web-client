import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { clearFlash } from '../../store/flash/actions';

// Components
import Flash from '../../components/shared/Flash';

// Selectors
import { getFlash } from '../../store/flash/selectors';

class FlashContainer extends Component {
    render() {
        const { clearFlash, flash } = this.props;

        if (!flash.message) {
            return null;
        }

        return (
            <Flash
                handleClick={clearFlash}
                {...flash}
            />
        );
    }
}

FlashContainer.propTypes = {
    clearFlash: PropTypes.func.isRequired,
    flash: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    flash: getFlash(state),
});

const mapDispatchToProps = dispatch => ({
    clearFlash: () => dispatch(clearFlash())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer);
