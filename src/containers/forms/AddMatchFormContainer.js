import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

// Actions
import { addMatch } from '../../store/byClubId/byPlayerId/match/actions';
import { fetchPlayers } from '../../store/byClubId/player/actions';

// Components
import AddMatchForm from '../../components/forms/AddMatchForm';

// Selectors
import { getIsFetching, getOpponentOptions, makeGetPlayer } from '../../store/byClubId/player/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

const AddMatchReduxForm = reduxForm({
    form: 'addMatch',
    validate: values => {
        const errors = {};

        if (!values.player_b_id) {
            errors.player_b_id = 'This field cannot be left empty';
        }

        if (!values.player_a_score) {
            errors.player_a_score = 'This field cannot be left empty';
        }

        if (!values.player_b_score) {
            errors.player_b_score = 'This field cannot be left empty';
        }

        return errors;
    }
})(AddMatchForm);

class AddMatchFormContainer extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    handleSubmit = data => this.props.addMatch(data);

    render() {
        const { isFetching, opponentOptions, playerA, playerB } = this.props;

        return (
            <AddMatchReduxForm
                isFetching={isFetching}
                onSubmit={this.handleSubmit}
                opponentOptions={opponentOptions}
                playerA={playerA}
                playerB={playerB}
            />
        );
    }
}

AddMatchFormContainer.propTypes = {
    addMatch: PropTypes.func.isRequired,
    fetchPlayers: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    opponentOptions: PropTypes.array.isRequired,
    playerA: PropTypes.object.isRequired,
    playerB: PropTypes.object
};

const makeMapStateToProps = () => {
    const getPlayer = makeGetPlayer();
    const getFormValues = formValueSelector('addMatch');

    return state => ({
        isFetching: getIsFetching(state),
        playerA: getPlayer(state, {playerId: getCurrentPlayerId(state)}),
        playerB: getPlayer(state, {playerId: getFormValues(state, 'player_b_id')}),
        opponentOptions: getOpponentOptions(state, {orderBy: 'a-z'})
    });
};

const mapDispatchToProps = dispatch => ({
    addMatch: data => dispatch(addMatch(data)),
    fetchPlayers: () => dispatch(fetchPlayers())
});

export default connect(makeMapStateToProps, mapDispatchToProps)(AddMatchFormContainer);
