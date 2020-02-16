import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import UpdateSettingsFormContainer from '../containers/forms/UpdateSettingsFormContainer';

const UpdateSettingsScreen = () => (
    <>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Settings</h1>

            <h2 className="u-size-h4">Be your true self! Unless that person is a loser.</h2>
        </header>

        <hr className="c-hr" />

        <UpdateSettingsFormContainer />

        <FooterContainer />    
    </>
);

export default UpdateSettingsScreen;
