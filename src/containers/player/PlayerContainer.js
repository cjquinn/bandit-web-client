import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayer } from '../../store/byClubId/player/actions';

// Components
import Loading from '../../components/Loading';
import Player from '../../components/player/Player';

// Selectors
import { makeGetPlayer } from '../../store/byClubId/player/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

class PlayerContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayer();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerId !== this.props.playerId) {
            this.props.fetchPlayer();
        }
    }

    render() {
        const { currentPlayerId, player } = this.props;

        if (!player) {
            return <Loading />;
        }

        return (
            <Player
                currentPlayerId={currentPlayerId}
                player={player}
            />
        );
    }
}

PlayerContainer.propTypes = {
    currentPlayerId: PropTypes.number.isRequired,
    fetchPlayer: PropTypes.func.isRequired,
    player: PropTypes.object,
    playerId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getPlayer = makeGetPlayer();

    return (state, props) => ({
        currentPlayerId: getCurrentPlayerId(state, props),
        player: getPlayer(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPlayer: () => dispatch(fetchPlayer(ownProps.playerId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(PlayerContainer);
