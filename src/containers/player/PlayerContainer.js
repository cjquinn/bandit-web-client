import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayer } from '../../store/byClubId/player/actions';

// Components
import Loading from '../../components/Loading';
import Player from '../../components/player/Player';

// Selectors
import { getClub } from '../../store/club/selectors';
import { makeGetPlayer } from '../../store/byClubId/player/selectors';
import { getUser } from '../../store/user/selectors';

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
        const { club, player, user } = this.props;

        if (!player) {
            return <Loading />;
        }

        return (
            <Player
                club={club}
                player={player}
                user={user}
            />
        );
    }
}

PlayerContainer.propTypes = {
    club: PropTypes.object,
    fetchPlayer: PropTypes.func.isRequired,
    player: PropTypes.object,
    playerId: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
};

const makeMapStateToProps = () => {
    const getPlayer = makeGetPlayer();

    return (state, props) => ({
        club: getClub(state),
        player: getPlayer(state, props),
        user: getUser(state)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPlayer: () => dispatch(fetchPlayer(ownProps.playerId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(PlayerContainer);
