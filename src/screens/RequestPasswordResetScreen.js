import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Svg from '../components/Svg';
import Template from '../components/shared/Template';

// Containers
import RequestPasswordResetFormContainer from '../containers/forms/RequestPasswordResetFormContainer';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const RequestPasswordResetScreen = () => (
    <Template>
        <header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">
                <span className="u-pos-relative">
                    <Svg
                        className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                        sprite={logo_knot}
                    />
            
                    Reset Password
                </span>
            </h1>

            <h2 className="u-size-h4">No take backs.</h2>
        </header>

        <hr className="c-hr" />

        <RequestPasswordResetFormContainer />

        <Footer>
            <Link
                className="u-color-playdough"
                to="/sign-in"
            >
                Sign in
            </Link>
        </Footer>
    </Template>
);

export default RequestPasswordResetScreen;
