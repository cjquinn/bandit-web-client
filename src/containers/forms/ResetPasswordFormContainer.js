import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { resetPassword } from '../../store/user/actions';

// Components
import ResetPasswordForm from '../../components/forms/ResetPasswordForm';

const ResetPasswordReduxForm = reduxForm({form: 'resetPassword'})(ResetPasswordForm);

class ResetPasswordFormContainer extends Component {
    handleSubmit = data => this.props.resetPassword(data);

    render() {
        return <ResetPasswordReduxForm onSubmit={this.handleSubmit} />;
    }
}

ResetPasswordFormContainer.propTypes = {
    resetPassword: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    resetPassword: data => dispatch(resetPassword(data))
});

export default connect(null, mapDispatchToProps)(ResetPasswordFormContainer);
