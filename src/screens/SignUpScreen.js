import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import SignUpFormContainer from '../containers/forms/SignUpFormContainer';

// Sprites
import { ReactComponent as LogoKnot } from '../assets/svg/sprite/logo_knot.svg';

const SignUpScreen = () => (
    <>
        <header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">
                <span className="u-pos-relative">
                    <LogoKnot className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" />
            
                    Join Bandit Match
                </span>
            </h1>

            <h2 className="u-size-h4">Let the games begin!</h2>
        </header>

        <hr className="c-hr" />

        <SignUpFormContainer />

        <FooterContainer>
            <Link
                className="u-color-playdough"
                to="/sign-in"
            >
                Sign in
            </Link>
        </FooterContainer>
    </>
);

export default SignUpScreen;
