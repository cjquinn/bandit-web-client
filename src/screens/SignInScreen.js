import React from 'react';

// Components
import Footer from '../components/Footer';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';
import logo_head from '../assets/svg/sprite/logo_head.svg';

const SignInScreen = () => (
    <Template>
        <main className="o-main">

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

                <h1 className="u-size-h2 u-color-orange u-uppercase u-weight-bold">Bandit</h1>
                <p>Play, match, bandit.</p>

            </header>

            <hr className="c-hr" />

            <section className="o-container u-vspace-3bl">

                <div className="u-ph-1bl u-vspace-3bl">

                    <fieldset className="u-pos-relative">
                        <input type="email" />
                        <label>Email:</label>
                    </fieldset>

                    <fieldset className="u-pos-relative">
                        <input type="password" />
                        <label>Password:</label>
                    </fieldset>

                </div>

                <a href="/" className="c-button c-button--default">Sign in</a>

            </section>

            <Footer />

        </main>
    </Template>
);

export default SignInScreen;
