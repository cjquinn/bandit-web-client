import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

// Actions
import { addMatch } from '../../store/byClubId/byPlayerId/match/actions';
import { fetchChallenges } from '../../store/byClubId/byPlayerId/challenge/actions';

// Components
import AddChallengeMatchForm from '../../components/forms/AddChallengeMatchForm';

// Selectors
import { getChallengeOptions, getIsFetching, makeGetChallenge } from '../../store/byClubId/byPlayerId/challenge/selectors';
import { getChallengeId } from '../../store/props/selectors';
import { getCurrentPlayerId } from '../../store/user/selectors';

const AddChallengeMatchReduxForm = reduxForm({
    form: 'addChallengeMatch',
    validate: values => {
        const errors = {};

        if (!values.challenge || !values.challenge.id) {
            errors.challenge = {id: 'This field cannot be left empty'};
        }

        if (!values.player_a_score) {
            errors.player_a_score = 'This field cannot be left empty';
        }

        if (!values.player_b_score) {
            errors.player_b_score = 'This field cannot be left empty';
        }

        return errors;
    }
})(AddChallengeMatchForm);

class AddChallengeMatchFormContainer extends Component {
    componentDidMount() {
        this.props.fetchChallenges(this.props.currentPlayerId);
    }

    handleSubmit = data => this.props.addMatch(data);

    render() {
        const { challenge, challengeOptions, currentPlayerId, isFetching } = this.props;

        return (
            <AddChallengeMatchReduxForm
                onSubmit={this.handleSubmit}
                challenge={challenge}
                challengeOptions={challengeOptions}
                currentPlayerId={currentPlayerId}
                isFetching={isFetching}
                initialValues={{challenge: {id: getChallengeId(null, this.props)}}}
            />
        );
    }
}

AddChallengeMatchFormContainer.propTypes = {
    addMatch: PropTypes.func.isRequired,
    challenge: PropTypes.object,
    challengeOptions: PropTypes.array.isRequired,
    currentPlayerId: PropTypes.number.isRequired,
    fetchChallenges: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

const makeMapStateToProps = () => {
    const getChallenge = makeGetChallenge();
    const getFormValues = formValueSelector('addChallengeMatch');

    return state => {
        const currentPlayerId = getCurrentPlayerId(state);

        return ({
            challenge: getChallenge(
                state,
                {challengeId: getFormValues(state, 'challenge.id')}
            ),
            challengeOptions: getChallengeOptions(state, {
                playerId: currentPlayerId,
                filter: 'accepted'
            }),
            currentPlayerId,
            isFetching: getIsFetching(state, {
                playerId: currentPlayerId,
                filter: 'accepted'
            })
        });
    };
};

const mapDispatchToProps = dispatch => ({
    addMatch: data => dispatch(addMatch(data)),
    fetchChallenges: currentPlayerId => dispatch(fetchChallenges(currentPlayerId, 'accepted'))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(AddChallengeMatchFormContainer);
