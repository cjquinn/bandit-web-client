import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Containers
import SignInFormContainer from '../containers/forms/SignInFormContainer';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';
import logo_head from '../assets/svg/sprite/logo_head.svg';

const SignInScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r u-flex u-fd-col u-ai-center">
            <div className="u-pos-relative">
                <Svg
                    className="u-width-6bl u-height-auto"
                    sprite={logo_head}
                />

                <Svg
                    className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto"
                    sprite={logo_knot}
                />
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
    </Template>
);

export default SignInScreen;
