import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';

// Containers
import CreateClubFormContainer from '../containers/forms/CreateClubFormContainer';

const CreateClubScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Create a Club</h1>

            <h2 className="u-size-h4">Let the games begin!</h2>
        </header>

        <hr className="c-hr" />

        <CreateClubFormContainer />

        <Footer/>
    </Template>
);

export default CreateClubScreen;
