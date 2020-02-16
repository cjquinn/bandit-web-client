import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import ResetPasswordFormContainer from '../containers/forms/ResetPasswordFormContainer';

// Sprites
import { ReactComponent as LogoKnot } from '../assets/svg/sprite/logo_knot.svg';

const ResetPasswordScreen = () => (
    <>
        <header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">
                <span className="u-pos-relative">
                    <LogoKnot className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" />
            
                    Reset Password
                </span>
            </h1>

            <h2 className="u-size-h4">Get your head in the game.</h2>
        </header>

        <hr className="c-hr" />

        <ResetPasswordFormContainer />

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

export default ResetPasswordScreen;
