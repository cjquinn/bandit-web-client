import React from 'react';

import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Template from '../components/shared/Template';

// Containers
// import CreateChallengeFormContainer from '../containers/forms/CreateChallengeFormContainer';

const CreateChallengeScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Create a Challenge</h1>
            <h2 className="u-size-h4 u-line-error">Your open challenge will be shared with your club-mates</h2>
        </header>

        <hr className="c-hr" />

            <div className="o-container u-ph-1bl u-vspace-3bl">

            {/* <CreateChallengeFormContainer /> */}

            <fieldset className="u-pos-relative">
                <input type="datetime-local" />
                <label>Date and Time:</label>
            </fieldset>

            <fieldset className="u-pos-relative">
            <input type="text" />
                <label>Location:</label>
            </fieldset>

            <Link
                to="/challenges/1"
                className="c-button c-button--default"
            >
                Create challenge
            </Link>

        </div>

        <FooterContainer/>
    </Template>
);

export default CreateChallengeScreen;
