import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { orderPlayersBy } from '../../store/byClubId/player/actions';

// Components
import OrderPlayersControl from '../../components/controls/OrderPlayersControl';

// Selectors
import { getOrderBy } from '../../store/byClubId/player/selectors';

class OrderPlayersControlContainer extends Component {
    handleChange = event => this.props.orderPlayersBy(event.target.value);

    render() {
        const { orderBy } = this.props;

        return (
            <OrderPlayersControl
                handleChange={this.handleChange}
                orderBy={orderBy}
            />
        );
    }
}

OrderPlayersControlContainer.propTypes = {
    orderPlayersBy: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    orderBy: getOrderBy(state)
});

const mapDispatchToProps = dispatch => ({
    orderPlayersBy: orderBy => dispatch(orderPlayersBy(orderBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlayersControlContainer);
