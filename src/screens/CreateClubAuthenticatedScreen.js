import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import CreateClubAuthenticatedFormContainer from '../containers/forms/CreateClubAuthenticatedFormContainer';

const CreateClubAuthenticatedScreen = () => (
    <>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Create a Club</h1>

            <h2 className="u-size-h4">Let the games begin!</h2>
        </header>

        <hr className="c-hr" />

        <CreateClubAuthenticatedFormContainer />

        <FooterContainer/>
    </>
);

export default CreateClubAuthenticatedScreen;
