import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Template from '../components/shared/Template';

// Containers
import InvitePlayerFormContainer from '../containers/forms/InvitePlayerFormContainer';

const InvitePlayerScreen = () => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Invite Player</h1>

                <h2 className="u-size-h4">Friendships end where Bandit begins.</h2>
            </header>
        </div>

        <hr className="c-hr" />

        <InvitePlayerFormContainer />

        <FooterContainer/>
    </Template>
);

export default InvitePlayerScreen;
