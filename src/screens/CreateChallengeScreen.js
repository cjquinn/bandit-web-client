import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import CreateChallengeFormContainer from '../containers/forms/CreateChallengeFormContainer';

const CreateChallengeScreen = () => (
    <>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Create a Challenge</h1>
            <h2 className="u-size-h4 u-line-error">Your open challenge will be shared with your club-mates</h2>
        </header>

        <hr className="c-hr" />

        <CreateChallengeFormContainer />

        <FooterContainer/>
    </>
);

export default CreateChallengeScreen;
