import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize, reduxForm } from 'redux-form';

// Actions
import { updateSettings } from '../../store/user/actions';

// Components
import UpdateSettingsForm from '../../components/forms/UpdateSettingsForm';

// Selectors
import { getUser } from '../../store/user/selectors';

const UpdateSettingsReduxForm = reduxForm({form: 'updateSettings'})(UpdateSettingsForm);

class UpdateSettingsFormContainer extends Component {
    componentDidMount() {
        console.log(this.props.user);
        this.props.initialize(this.props.user);
    }

    handleSubmit = data => this.props.updateSettings(data);

    render() {
        return <UpdateSettingsReduxForm onSubmit={this.handleSubmit} />;
    }
}

UpdateSettingsFormContainer.propTypes = {
    initialize: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    updateSettings: PropTypes.func.isRequired
};

const mapDispatchToState = state => ({
    user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
    initialize: values => dispatch(initialize('updateSettings', values)),
    updateSettings: data => dispatch(updateSettings(data))
});

export default connect(mapDispatchToState, mapDispatchToProps)(UpdateSettingsFormContainer);
