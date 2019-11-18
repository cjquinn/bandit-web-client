import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { createChallenge } from '../../store/byClubId/byPlayerId/challenge/actions';

// Components
import CreateChallengeForm from '../../components/forms/CreateChallengeForm';

const CreateChallengeReduxForm = reduxForm({form: 'createChallenge'})(CreateChallengeForm);

class CreateChallengeFormContainer extends Component {
    handleSubmit = data => this.props.createChallenge(data);

    render() {
        return (
            <CreateChallengeReduxForm
                initialValues={{match_datetime: moment().format('YYYY-MM-DDTHH:mm')}}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

CreateChallengeFormContainer.propTypes = {
    createChallenge: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createChallenge: data => dispatch(createChallenge(data))
});

export default connect(null, mapDispatchToProps)(CreateChallengeFormContainer);
