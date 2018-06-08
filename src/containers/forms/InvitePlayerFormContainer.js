import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { invitePlayer } from '../../store/byClubId/player/actions';

// Components
import InvitePlayerForm from '../../components/forms/InvitePlayerForm';

const InvitePlayerReduxForm = reduxForm({form: 'invitePlayer'})(InvitePlayerForm);

class InvitePlayerFormContainer extends Component {
    handleSubmit = data => this.props.invitePlayer(data);

    render() {
        return <InvitePlayerReduxForm onSubmit={this.handleSubmit} />;
    }
}

InvitePlayerFormContainer.propTypes = {
    invitePlayer: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    invitePlayer: data => dispatch(invitePlayer(data))
});

export default connect(null, mapDispatchToProps)(InvitePlayerFormContainer);
