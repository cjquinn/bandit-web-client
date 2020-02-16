import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import SignInFormContainer from '../containers/forms/SignInFormContainer';

// Sprites
import { ReactComponent as LogoKnotPride } from '../assets/svg/sprite/logo_knot_pride.svg';
import { ReactComponent as LogoHeadPride } from '../assets/svg/sprite/logo_head_pride.svg';

const SignInScreen = () => (
    <>
        <header className="o-container u-ph-1bl u-vspace-06r u-flex u-fd-col u-ai-center">
            <div className="u-pos-relative">
                <LogoHeadPride className="u-width-6bl u-height-auto" />

                <LogoKnotPride className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto" />
            </div>

            <h1 className="u-size-h2 u-color-orange u-uppercase u-weight-bold">Bandit Match</h1>

            <p className="u-size-h4 u-color-white">Play better matches</p>
        </header>

        <hr className="c-hr" />

        <SignInFormContainer />

        <FooterContainer>
            <Link
                className="u-color-playdough"
                to="/create-club"
            >
                Create a Club
            </Link>

            <Link
                className="u-color-playdough"
                to="/request-password-reset"
            >
                Reset password
            </Link>
        </FooterContainer>
    </>
);

export default SignInScreen;
