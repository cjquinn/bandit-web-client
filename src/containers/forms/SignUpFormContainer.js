import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { signUp } from '../../store/user/actions';

// Components
import SignupForm from '../../components/forms/SignupForm';

// Selectors
import { getEmail } from '../../store/router/selectors';

const mapStateToProps = state => ({
    initialValues: {email: getEmail(state)}
});

const SignupReduxForm = connect(mapStateToProps)(reduxForm({form: 'signUp'})(SignupForm));

class SignupFormContainer extends Component {
    handleSubmit = data => this.props.signUp(data);

    render() {
        return <SignupReduxForm onSubmit={this.handleSubmit} />;
    }
}

SignupFormContainer.propTypes = {
    signUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    signUp: data => dispatch(signUp(data))
});

export default connect(null, mapDispatchToProps)(SignupFormContainer);
