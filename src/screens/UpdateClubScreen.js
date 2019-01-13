import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Template from '../components/shared/Template';

// Containers
import UpdateClubFormContainer from '../containers/forms/UpdateClubFormContainer';

const UpdateClubScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Club</h1>

            <h2 className="u-size-h4">Be your true self! Unless that person is a loser.</h2>
        </header>

        <hr className="c-hr" />

        <UpdateClubFormContainer />

        <FooterContainer />    
    </Template>
);

export default UpdateClubScreen;
