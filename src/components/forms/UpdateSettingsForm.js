import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
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

                    <label className="c-checkbox u-flex u-ai-center u-hspace-1bl">
                        <input className="c-checkbox__input" type="checkbox" />
                        <div className="u-flex u-fd-col">
                            <span className="c-checkbox__label">Match Scores</span>
                            <span className="c-checkbox__description u-weight-normal u-color-grape u-size-14px">Submitted by my opponents</span>
                        </div>
                    </label>

                    <label className="c-checkbox u-flex u-ai-center u-hspace-1bl">
                        <input className="c-checkbox__input" type="checkbox" />
                        <div className="u-flex u-fd-col">
                            <span className="c-checkbox__label">Open Challenges</span>
                            <span className="c-checkbox__description u-weight-normal u-color-grape u-size-14px">Open invitations from my club mates
                            </span>
                        </div>
                    </label>

                    <label className="c-checkbox u-flex u-ai-center u-hspace-1bl">
                        <input className="c-checkbox__input" type="checkbox" />
                        <div className="u-flex u-fd-col">
                            <span className="c-checkbox__label">New Features</span>
                            <span className="c-checkbox__description u-weight-normal u-color-grape u-size-14px">Platform updates about Bandit Match</span>
                        </div>
                    </label>

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
