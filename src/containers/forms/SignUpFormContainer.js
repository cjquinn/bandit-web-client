import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { signUp } from '../../store/user/actions';

// Components
import SignUpForm from '../../components/forms/SignUpForm';

// Selectors
import { getEmail } from '../../store/router/selectors';

const mapStateToProps = state => ({
    initialValues: {email: getEmail(state)}
});

const SignUpReduxForm = connect(mapStateToProps)(reduxForm({form: 'signUp'})(SignUpForm));

class SignUpFormContainer extends Component {
    handleSubmit = data => this.props.signUp(data);

    render() {
        return <SignUpReduxForm onSubmit={this.handleSubmit} />;
    }
}

SignUpFormContainer.propTypes = {
    signUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    signUp: data => dispatch(signUp(data))
});

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
