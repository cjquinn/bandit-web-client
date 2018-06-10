import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayers } from '../../store/byClubId/player/actions';

// Components
import PlayersList from '../../components/lists/PlayersList';

// Selectors
import { getPlayers } from '../../store/byClubId/player/selectors';

class PlayersListContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    render() {
        const { players } = this.props;

        return <PlayersList players={players} />;
    }
}

PlayersListContainer.propTypes = {
    players: PropTypes.array.isRequired,
    fetchPlayers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    players: getPlayers(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => dispatch(fetchPlayers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersListContainer);
