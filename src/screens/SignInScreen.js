import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const SignInScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl u-vspace-06r u-flex u-fd-col u-ai-center">

                <div class="u-pos-relative">
                    {/* <svg class="u-width-6bl u-height-auto" width="95" height="95" viewBox="0 0 95 95"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/svg/sprite.svg#logo-head"></use></svg>
                    <svg class="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-2bl u-height-auto" width="36" height="31" viewBox="0 0 36 31"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/svg/sprite.svg#logo-knot"></use></svg> */}
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
