import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';
import Svg from '../components/Svg';

const SignInScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl u-vspace-06r u-flex u-fd-col u-ai-center">

                <div class="u-pos-relative">

                    <Svg 
                        sprite={logo_head}
                        className="u-width-6bl u-height-auto"
                    />

                    <Svg
                        sprite={logo_knot}
                        className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto"
                    />
                    
                </div>

                <h1 class="u-size-h2 u-color-orange u-uppercase u-weight-bold">Bandit</h1>
                <p>Play, match, bandit.</p>

            </header>

            <hr class="c-hr" />

            <section class="o-container u-vspace-3bl">

                <div class="u-ph-1bl u-vspace-3bl">

                    <fieldset class="u-pos-relative">
                        <input type="email" />
                        <label>Email:</label>
                    </fieldset>

                    <fieldset class="u-pos-relative">
                        <input type="password" />
                        <label>Password:</label>
                    </fieldset>

                </div>

                <a href="/" class="c-button c-button--default">Sign in</a>

            </section>

            <Footer />

        </main>
    </Template>
);

export default SignInScreen;
