import React from 'react';

// Components
import Footer from '../components/Footer';
import Match from '../components/Match';
import Template from '../components/Template';

const ResultsScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl">

                <div class="u-vspace-06r">
                    <h1 class="u-size-h1 u-color-white">Club Matches</h1>
                    <h2 class="u-size-h4">Who’s been collecting scalps lately?</h2>
                </div>

                <a href="/add-matches.php" class="c-button c-button--default u-mt-2bl">Add matches</a>

            </header>

            <hr class="c-hr" />

            <section class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Sunday 18th</h1>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <Match />
                    <Match />
                    <Match />
                </ol>

            </section>

            <section class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Saturday 17th</h1>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <Match />
                    <Match />
                    <Match />
                </ol>

            </section>

            <section class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Thursday 14th</h1>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <Match />
                    <Match />
                    <Match />
                    <Match />
                    <Match />
                    <Match />
                </ol>

            </section>

            <Footer />

        </main>
    </Template>
);

export default ResultsScreen;
