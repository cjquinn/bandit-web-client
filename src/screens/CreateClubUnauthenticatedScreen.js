import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import CreateClubUnauthenticatedFormContainer from '../containers/forms/CreateClubUnauthenticatedFormContainer';

// Sprites
import { ReactComponent as LogoKnot } from '../assets/svg/sprite/logo_knot.svg';

const CreateClubUnauthenticatedScreen = () => (
    <>
        <header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">
                <span className="u-pos-relative">
                    <LogoKnot className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" />
            
                    Create a Club
                </span>
            </h1>

            <h2 className="u-size-h4">Let the games begin!</h2>
        </header>

        <hr className="c-hr" />

        <CreateClubUnauthenticatedFormContainer />

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

export default CreateClubUnauthenticatedScreen;
