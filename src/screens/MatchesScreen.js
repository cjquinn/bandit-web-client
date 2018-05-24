import React from 'react';

// Components
import Footer from '../components/Footer';
import Match from '../components/Match';
import Template from '../components/Template';

const MatchesScreen = () => (
    <Template>

        <header className="o-container u-ph-1bl">

            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Club Matches</h1>
                <h2 className="u-size-h4">Who’s been collecting scalps lately?</h2>
            </div>

            <a href="/add-result" className="c-button c-button--default u-mt-2bl">Add matches</a>

        </header>

        <hr className="c-hr" />

        <section className="o-container">

            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Sunday 18th</h1>
            </header>

            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <Match />
                <Match />
                <Match />
            </ol>

        </section>

        <section className="o-container">

            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Saturday 17th</h1>
            </header>

            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <Match />
                <Match />
                <Match />
            </ol>

        </section>

        <section className="o-container">

            <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                <h1 className="u-size-h2 u-color-white">Thursday 14th</h1>
            </header>

            <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
            </ol>

        </section>

        <Footer />

    </Template>
);

export default MatchesScreen;
