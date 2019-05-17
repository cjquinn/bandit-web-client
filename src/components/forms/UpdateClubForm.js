import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import InputField from '../fields/InputField';
import Loading from '../shared/Loading';

const UpdateClubForm = ({ club, ...props }) => {
    if (!club) {
        return <Loading />;
    }

    return (
        <Form
            buttonText="Update club"
            {...props}
        >       
            <div className="u-ph-1bl u-vspace-3bl">
                <Field
                    component={InputField}
                    name="name"
                    label="Name:"
                    type="text"
                />
            </div>
        </Form>
    );
};

UpdateClubForm.propTypes = {
    club: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default UpdateClubForm;
