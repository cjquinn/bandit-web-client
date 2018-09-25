import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Svg from '../components/Svg';
import Template from '../components/shared/Template';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const ErrorScreen = () => (
    <Template>
        <header className="o-container u-flex u-ai-center u-jc-center u-grow-1 u-fd-col u-ph-1bl">
            <h1 className="u-size-h0 u-color-white">
                <span className="u-pos-relative u-inline-block">
                    <Svg
                        sprite={logo_knot}
                        className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto"
                    />

                    500
                </span>
            </h1>

            <h2 className="u-size-h1 u-mt-2bl u-color-white">The server choked</h2>

            <p className="u-ph-2bl u-size-h4 u-mt-1bl u-weight-bold u-align-center u-line-105">When it stops coughing we’ll ask it what the deal was.</p>
        </header>

        <section className="o-container u-vspace-3bl u-ph-1bl">
            <Link to="/" className="c-button c-button--default">Try again</Link>
        </section>

        <Footer>
        </Footer>
    </Template>
);

export default ErrorScreen;
