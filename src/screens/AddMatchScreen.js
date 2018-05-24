import React from 'react';

import Template from '../components/Template';

// Components
import Footer from '../components/Footer';

import AddMatches from '../components/AddMatches';

const AddMatchScreen = () => (

    <div className="o-container u-ph-1bl u-vspace-2bl">

        <a href="/results" className="c-go">Back</a>

        <header className="o-container">

            <div className="u-flex u-ai-center u-jc-between">

                <div className="u-vspace-06r">
                    <h1 className="u-size-h1 u-color-white">Add Matches</h1>
                    <h2 className="u-size-h4">Get those games in, Stephen!</h2>
                </div>

            </div>

        </header>

        <div className="c-info">

            <div className="o-container u-ph-1bl u-pv-2bl u-color-puss u-line-105">

                <h3 className="u-size-h4">What’s the score <em>if</em>&hellip;?</h3>

                <ol className="u-vspace-mt-">
                    <li>You won <strong className="u-color-white">5 games</strong></li>
                    <li>Your opponent won <strong className="u-color-white">3 games</strong></li>
                    <li>Score is <strong className="u-color-white">5 &ndash; 3</strong></li>
                </ol>

            </div>

        </div>

        <section className="o-container u-vspace-3bl">

            <div className="u-vspace-2bl">

                <div className="u-vspace-1px">
                    <div title>
                        <AddMatches />
                    </div>
                </div>

                <div className="u-flex u-ai-center u-ph-1bl u-hspace-05bl u-size-14px">
                    <span>Monday 11th January 2017</span>
                </div>

                <a href="#add-result" className="c-button" disabled>Add Result</a>

            </div>

        </section>

        <Footer />
    
    </div>
            
);

export default AddMatchScreen;
