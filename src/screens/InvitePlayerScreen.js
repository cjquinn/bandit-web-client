import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

// Containers
import InvitePlayerFormContainer from '../containers/forms/InvitePlayerFormContainer';

const InvitePlayerScreen = () => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/players"
                className="c-go"
            >
                Back to players
            </Link>

            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Invite Player</h1>

                <h2 className="u-size-h4">Friendships end where Bandit begins.</h2>
            </header>
        </div>

        <hr className="c-hr" />

        <InvitePlayerFormContainer />

        <Footer/>
    </Template>
);

export default InvitePlayerScreen;
