import React from 'react';

import Template from '../components/Template';

// Components
import Footer from '../components/Footer';

import AddMatches from '../components/AddMatches';

const AddResultScreen = () => (
    <div class="o-main">

        <div class="o-container u-ph-1bl u-vspace-2bl">

                <a href="/matches.php" class="c-go">Go</a>

                <header class="o-container">

                <div class="u-flex u-ai-center u-jc-between">

                    <div class="u-vspace-06r">
                        <h1 class="u-size-h1 u-color-white">Add Matches</h1>
                        <h2 class="u-size-h4">Get those games in, Stephen!</h2>
                    </div>

                </div>

            </header>

            </div>

            <hr class="c-hr" />

            <section class="o-container u-vspace-3bl">

                <div class="u-vspace-2bl">

                    <div class="u-vspace-1px">
                        <div title>
                            <AddMatches />
                        </div>
                        <div title class="u-opac-02">
                            <AddMatches />
                        </div>
                    </div>

                    <div class="u-flex u-ai-center u-ph-1bl u-hspace-05bl u-size-14px">
                        <span>Monday 11th January 2017</span>
                    </div>

                    <a href="#add-result" class="c-button" disabled>Add Result</a>

                </div>

            </section>

            <Footer />
            
    </div>
);

export default AddResultScreen;
