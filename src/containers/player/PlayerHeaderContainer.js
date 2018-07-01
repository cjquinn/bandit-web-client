import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayer } from '../../store/byClubId/player/actions';

// Components
import PlayerHeader from '../../components/player/PlayerHeader';

// Selectors
import { makeGetPlayer } from '../../store/byClubId/player/selectors';

class PlayerHeaderContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayer();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerId !== this.props.playerId) {
            this.props.fetchPlayer();
        }
    }

    render() {
        const { player } = this.props;

        return <PlayerHeader player={player} />;
    }
}

PlayerHeaderContainer.propTypes = {
    fetchPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
    playerId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getPlayer = makeGetPlayer();

    return (state, props) => ({
        player: getPlayer(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPlayer: () => dispatch(fetchPlayer(ownProps.playerId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(PlayerHeaderContainer);
