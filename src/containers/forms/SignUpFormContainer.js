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

const SignupReduxForm = reduxForm({form: 'signUp'})(SignupForm);

class SignupFormContainer extends Component {
    handleSubmit = data => this.props.signUp(data);

    render() {
        return <SignupReduxForm onSubmit={this.handleSubmit} />;
    }
}

SignupFormContainer.propTypes = {
    email: PropTypes.string,
    signUp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    email: getEmail(state)
});

const mapDispatchToProps = dispatch => ({
    signUp: data => dispatch(signUp(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
