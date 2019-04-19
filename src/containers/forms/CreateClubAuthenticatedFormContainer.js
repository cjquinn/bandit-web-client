import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { createClub } from '../../store/club/actions';

// Components
import CreateClubAuthenticatedForm from '../../components/forms/CreateClubAuthenticatedForm';

const CreateClubAuthenticatedReduxForm = reduxForm({form: 'createClub'})(CreateClubAuthenticatedForm);

class CreateClubAuthenticatedFormContainer extends Component {
    handleSubmit = data => this.props.createClub(data);

    render() {
        return <CreateClubAuthenticatedReduxForm onSubmit={this.handleSubmit} />;
    }
}

CreateClubAuthenticatedFormContainer.propTypes = {
    createClub: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createClub: data => dispatch(createClub(data))
});

export default connect(null, mapDispatchToProps)(CreateClubAuthenticatedFormContainer);
