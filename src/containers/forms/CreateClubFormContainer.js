import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { createClub } from '../../store/club/actions';

// Components
import CreateClubForm from '../../components/forms/CreateClubForm';

const CreateClubReduxForm = reduxForm({form: 'createClub'})(CreateClubForm);

class CreateClubFormContainer extends Component {
    handleSubmit = data => this.props.createClub(data);

    render() {
        return <CreateClubReduxForm onSubmit={this.handleSubmit} />;
    }
}

CreateClubFormContainer.propTypes = {
    createClub: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createClub: data => dispatch(createClub(data))
});

export default connect(null, mapDispatchToProps)(CreateClubFormContainer);
