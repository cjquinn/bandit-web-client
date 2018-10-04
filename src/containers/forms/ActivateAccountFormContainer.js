import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { activateAccount, validateActivateAccountToken } from '../../store/user/actions';

// Components
import ActivateAccountForm from '../../components/forms/ActivateAccountForm';

const ActivateAccountReduxForm = reduxForm({form: 'activateAccount'})(ActivateAccountForm);

class ActivateAccountFormContainer extends Component {
    handleSubmit = data => this.props.activateAccount(data);

    componentDidMount() {
        this.props.validateActivateAccountToken();
    }

    render() {
        return <ActivateAccountReduxForm onSubmit={this.handleSubmit} />;
    }
}

ActivateAccountFormContainer.propTypes = {
    activateAccount: PropTypes.func.isRequired,
    validateActivateAccountToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    activateAccount: data => dispatch(activateAccount(data)),
    validateActivateAccountToken: () => dispatch(validateActivateAccountToken())
});

export default connect(null, mapDispatchToProps)(ActivateAccountFormContainer);
