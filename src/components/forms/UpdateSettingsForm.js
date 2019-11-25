import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import CheckboxField from '../fields/CheckboxField';
import Form from './Form';
import InputField from '../fields/InputField';

const UpdateSettingsForm = props => (
    <Form
        buttonText="Update settings"
        {...props}
    >
        <div className="u-ph-1bl u-vspace-3bl">
            <div className="u-flex u-hspace-2bl">
                <Field
                    component={InputField}
                    name="first_name"
                    label="First name:"
                    type="text"
                />
                
                <Field
                    component={InputField}
                    name="last_name"
                    label="Last name:"
                    type="text"
                />
            </div>

            <Field
                component={InputField}
                name="email"
                label="Email name:"
                type="text"
            />

            <div className="u-flex u-hspace-2bl">
                <Field
                    component={InputField}
                    name="current_password"
                    label="Current password:"
                    type="password"
                />
                
                <Field
                    component={InputField}
                    name="new_password"
                    label="New password:"
                    type="password"
                />
            </div>

            <hr className="c-hr" />

            <div className="u-vspace-1bl">
                <h2 className="u-size-h3 u-weight-bold u-color-white">Email Settings</h2>

                <div className="u-vspace-1bl">
                    <Field
                        component={CheckboxField}
                        type="checkbox"
                        name="email_preferences.match_added"
                        label="Match Scores"
                        description="Submitted by my opponents"
                    />

                    <Field
                        component={CheckboxField}
                        type="checkbox"
                        name="email_preferences.challenge_created"
                        label="Open Challenges"
                        description="Open invitations from my club mates"
                    />

                    <Field
                        component={CheckboxField}
                        type="checkbox"
                        name="email_preferences.weekly_digest"
                        label="Weekly Digest"
                        description="Weekly round-up of club activity"
                    />
                </div>

            </div>

        </div>
    </Form>
);

UpdateSettingsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
};

export default UpdateSettingsForm;
