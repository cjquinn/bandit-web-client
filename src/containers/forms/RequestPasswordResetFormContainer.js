import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { requestPasswordReset } from '../../store/user/actions';

// Components
import RequestPasswordResetForm from '../../components/forms/RequestPasswordResetForm';

const RequestPasswordResetReduxForm = reduxForm({form: 'requestPasswordReset'})(RequestPasswordResetForm);

class RequestPasswordResetFormContainer extends Component {
    handleSubmit = data => this.props.requestPasswordReset(data);

    render() {
        return <RequestPasswordResetReduxForm onSubmit={this.handleSubmit} />;
    }
}

RequestPasswordResetFormContainer.propTypes = {
    requestPasswordReset: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    requestPasswordReset: data => dispatch(requestPasswordReset(data))
});

export default connect(null, mapDispatchToProps)(RequestPasswordResetFormContainer);
