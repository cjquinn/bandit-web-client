import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayers } from '../../store/byClubId/player/actions';

// Components
import PlayersList from '../../components/lists/PlayersList';

// Selectors
import { getIsFetching, getPlayers } from '../../store/byClubId/player/selectors';
import { getUserId } from '../../store/shared/selectors';

class PlayersListContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    render() {
        const { isFetching, players, userId } = this.props;

        return (
            <PlayersList
                isFetching={isFetching}
                players={players}
                userId={userId}
            />
        );
    }
}

PlayersListContainer.propTypes = {
    players: PropTypes.array.isRequired,
    fetchPlayers: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    players: getPlayers(state),
    userId: getUserId(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => dispatch(fetchPlayers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersListContainer);
