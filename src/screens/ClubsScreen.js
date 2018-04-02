import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const ClubsScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl u-vspace-06r">

                <h1 class="u-size-h1 u-color-white">Clubs</h1>
                <h2 class="u-size-h4">Jump into a different tribe.</h2>

            </header>

            <hr class="c-hr" />

            <section class="o-container u-vspace-3bl">

                <div class="u-ph-1bl u-vspace-1px">

                    <li class="u-bgcolor-fold u-pos-relative">
                        <div class="o-absolute-fill u-borrad-inherit u-shadow-you u-pointer-none"></div>
                        <div class="u-flex u-ai-center u-pv-1bl u-ph-1bl">
                        <div class="u-grow-1 u-vspace-03r">
                        <dt class="u-color-paste u-weight-bold"><span class="o-dictate">Signed into </span>Britannia Squash</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span>48 players</span>
                        <span>11 days since you've played</span>
                        </dd>
                        </div>
                        </div>
                    </li>
                    <li class="u-bgcolor-fold u-pos-relative u-opac-05 u-opac-1@hover">
                        <a href="#" class="u-flex u-ai-center u-pv-1bl u-ph-1bl">
                        <div class="u-grow-1 u-vspace-03r">
                        <dt class="u-color-paste u-weight-bold">Atrium Ping Pong Park</dt>
                        <dd class="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span>48 players</span>
                        <span>11 days since you've played</span>
                        </dd>
                        </div>
                        </a>
                    </li>

                </div>

                <a href="/create-club.php" class="c-button c-button--default">Create a club</a>
            </section>

            <Footer/>

        </main>
    </Template>
);

export default ClubsScreen;
