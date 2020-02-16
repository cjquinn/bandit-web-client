import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { acceptTerms } from '../../store/user/actions';

// Components
import AcceptTermsForm from '../../components/forms/AcceptTermsForm';

// Selectors
import { getUser } from '../../store/user/selectors';

const AcceptTermsReduxForm = reduxForm({form: 'acceptTerms'})(AcceptTermsForm);

class AcceptTermsFormContainer extends Component {
    handleSubmit = data => this.props.acceptTerms(data);

    render() {
        const { user } = this.props;

        if (!user || user.has_accepted_terms) {
            return null;
        }

        return <AcceptTermsReduxForm onSubmit={this.handleSubmit} />;
    }
}

AcceptTermsFormContainer.propTypes = {
    acceptTerms: PropTypes.func.isRequired,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
    acceptTerms: data => dispatch(acceptTerms(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AcceptTermsFormContainer);
