import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize, reduxForm } from 'redux-form';

// Actions
import { addMatch } from '../../store/byClubId/byPlayerId/match/actions';
import { fetchPlayers } from '../../store/byClubId/player/actions';

// Components
import AddMatchForm from '../../components/forms/AddMatchForm';

// Selectors
import { getOpponents } from '../../store/byClubId/player/selectors';
import { getUser } from '../../store/user/selectors';

const AddMatchReduxForm = reduxForm({form: 'addMatch'})(AddMatchForm);

class AddMatchFormContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayers().then(() =>
            this.props.players.length > 0 && this.props.initialize({player_b_id: this.props.players[0].id})
        );
    }

    handleSubmit = data => this.props.addMatch(data);

    render() {
        const { players, user } = this.props;

        return (
            <AddMatchReduxForm
                onSubmit={this.handleSubmit}
                players={players}
                user={user}
            />
        );
    }
}

AddMatchFormContainer.propTypes = {
    addMatch: PropTypes.func.isRequired,
    fetchPlayers: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    players: getOpponents(state, {orderBy: 'a-z'}),
    user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
    addMatch: data => dispatch(addMatch(data)),
    fetchPlayers: () => dispatch(fetchPlayers()),
    initialize: values => dispatch(initialize('addMatch', values))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMatchFormContainer);
