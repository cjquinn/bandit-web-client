import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { resetPassword, validateResetPasswordToken } from '../../store/user/actions';

// Components
import ResetPasswordForm from '../../components/forms/ResetPasswordForm';

const ResetPasswordReduxForm = reduxForm({form: 'resetPassword'})(ResetPasswordForm);

class ResetPasswordFormContainer extends Component {
    handleSubmit = data => this.props.resetPassword(data);

    componentDidMount() {
        this.props.validateResetPasswordToken();
    }

    render() {
        return <ResetPasswordReduxForm onSubmit={this.handleSubmit} />;
    }
}

ResetPasswordFormContainer.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    validateResetPasswordToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    resetPassword: data => dispatch(resetPassword(data)),
    validateResetPasswordToken: () => dispatch(validateResetPasswordToken())
});

export default connect(null, mapDispatchToProps)(ResetPasswordFormContainer);
