import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize, reduxForm } from 'redux-form';

// Actions
import { updateClub } from '../../store/club/actions';

// Components
import UpdateClubForm from '../../components/forms/UpdateClubForm';

// Selectors
import { getClub } from '../../store/club/selectors';

const UpdateClubReduxForm = reduxForm({form: 'updateClub'})(UpdateClubForm);

class UpdateClubFormContainer extends Component {
    componentDidMount() {
        if (this.props.club) {
            this.props.initialize(this.props.club);
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.club && this.props.club) {
            this.props.initialize(this.props.club);
        }
    }

    handleSubmit = data => this.props.updateClub(data);

    render() {
        return (
            <UpdateClubReduxForm
                club={this.props.club}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

UpdateClubFormContainer.propTypes = {
    initialize: PropTypes.func.isRequired,
    club: PropTypes.object,
    updateClub: PropTypes.func.isRequired
};

const mapDispatchToState = state => ({
    club: getClub(state)
});

const mapDispatchToProps = dispatch => ({
    initialize: values => dispatch(initialize('updateClub', values)),
    updateClub: data => dispatch(updateClub(data))
});

export default connect(mapDispatchToState, mapDispatchToProps)(UpdateClubFormContainer);
