import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { createClub } from '../../store/club/actions';

// Components
import CreateClubUnauthenticatedForm from '../../components/forms/CreateClubUnauthenticatedForm';

const CreateClubUnauthenticatedReduxForm = reduxForm({form: 'createClubUnauthenticated'})(CreateClubUnauthenticatedForm);

class CreateClubUnauthenticatedFormContainer extends Component {
    handleSubmit = data => this.props.createClub(data);

    render() {
        return <CreateClubUnauthenticatedReduxForm onSubmit={this.handleSubmit} />;
    }
}

CreateClubUnauthenticatedFormContainer.propTypes = {
    createClub: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createClub: data => dispatch(createClub(data))
});

export default connect(null, mapDispatchToProps)(CreateClubUnauthenticatedFormContainer);
