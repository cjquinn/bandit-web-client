import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { createClub } from '../../store/club/actions';

// Components
import SignUpForm from '../../components/forms/SignUpForm';

const SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm);

class SignUpFormContainer extends Component {
    handleSubmit = data => this.props.createClub(data);

    render() {
        return <SignUpReduxForm onSubmit={this.handleSubmit} />;
    }
}

SignUpFormContainer.propTypes = {
    createClub: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createClub: data => dispatch(createClub(data))
});

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
