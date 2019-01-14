import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const NotFoundScreen = () => (
    <Template>
        <header className="o-container u-flex u-ai-center u-jc-center u-grow-1 u-fd-col u-ph-1bl">
            <h1 className="u-size-h0 u-color-white">
                <span className="u-pos-relative u-inline-block">
                    <Svg sprite={logo_knot} className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto" />

                    404
                </span>
            </h1>

            <h2 className="u-size-h1 u-mt-2bl u-color-white">You lost the game</h2>

            <p className="u-size-h4 u-mt-1bl u-weight-bold">There’s nothing here.</p>
        </header>

        <section className="o-container u-vspace-3bl u-ph-1bl">
            <Link to="/" className="c-button c-button--default">Go home</Link>
        </section>

        <FooterContainer>
        </FooterContainer>
    </Template>
);

export default NotFoundScreen;
