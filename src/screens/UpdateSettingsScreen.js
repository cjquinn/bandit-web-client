import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';

// Containers
import UpdateSettingsFormContainer from '../containers/forms/UpdateSettingsFormContainer';

const UpdateSettingsScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Settings</h1>

            <h2 className="u-size-h4">Be your true self! Unless that person is a loser.</h2>
        </header>

        <hr className="c-hr" />

        <UpdateSettingsFormContainer />

        <Footer />    
    </Template>
);

export default UpdateSettingsScreen;
