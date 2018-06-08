import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPlayers } from '../../store/byClubId/player/actions';

// Components
import PlayersList from '../../components/lists/PlayersList';

// Selectors
import { makeGetPlayers } from '../../store/byClubId/player/selectors';

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

const makeMapStateToProps = () => {
    const getPlayers = makeGetPlayers();

    return (state, props) => ({
        players: getPlayers(state, props)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => dispatch(fetchPlayers())
});

export default connect(makeMapStateToProps, mapDispatchToProps)(PlayersListContainer);
