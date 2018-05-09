import React from 'react';

// Components
import Footer from '../components/Footer';
import Match from '../components/Match';
import PlayerPhoto from '../components/PlayerPhoto';
import Scoresheet from '../components/Scoresheet';
import Template from '../components/Template';

const ResultScreen = () => (

<Template>

    <div className="o-container u-ph-1bl u-vspace-2bl">

        <a href="/results" className="c-go">Back to Matches</a>

    </div>

    <hr className="c-hr" />

    {/* PAST MATCH */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

    </section>
    {/* /PAST MATCH */}

    {/* YOU CREATED - CAN CANCEL MATCH */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

        <footer className="u-ph-1bl">
            <a href="#cancel-match" className="c-button c-button--warning u-mt-1bl">Cancel match</a>
        </footer>

    </section>
    {/* /YOU CREATED - CAN CANCEL MATCH */}

    {/* THEY CREATED - CAN DISPUTE MATCH */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

        <footer className="u-ph-1bl">
            <a href="#dispute-match" className="c-button c-button--warning u-mt-1bl">Dispute match</a>
        </footer>

    </section>
    {/* /THEY CREATED - CAN DISPUTE MATCH */}

    {/* DISPUTING - WRONG SCORE */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

        <footer className="u-ph-1bl">
            <a href="#dispute-match" className="c-button u-mt-1bl" disabled>Disputing match&hellip;</a>
        </footer>

    </section>
    
    <hr className="c-hr" />

    <section>

        <div id="open-dispute" className="u-vspace-2bl">

            <div className="o-container u-ph-1bl">

                <header className="u-flex u-jc-between u-ai-center">
                    <h1 id="start-dispute" className="u-size-h1 u-color-white">Dispute</h1>

                    <a href="#" className="u-color-hotmelon">Cancel</a>
                </header>

            </div>

            <nav className="u-bgcolor-fold u-pt-2bl">
                <ul className="u-flex u-ph-1bl u-hspace-1bl">
                    <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-white u-bgcolor-floor">Wrong scores</a></li>
                    <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h4">Didn't happen</a></li>
                </ul>
            </nav>

            <div className="o-container u-vspace-3bl">

                <div className="u-vspace-2bl">

                    <p className="u-ph-1bl">What <em>were</em> the scores, Christy?</p>

                    <div className="u-borrad-first-2200 u-borrad-last-0022">
                        <li className="u-bgcolor-fold">
                            <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

                                <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

                                    <dt className="u-size-h4 u-weight-bold u-ws-no">
                                        <span className="o-dictate">Teddy Austin </span> <input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span className="o-dictate">Angelica Hamlet </span><input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
                                    </dt>

                                </div>

                                <div className="u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">

                                    <PlayerPhoto /> <span className="o-ellipsis" aria-hidden="true">Teddy</span>

                                </div>

                                <div className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

                                    <span className="o-ellipsis" aria-hidden="true">Angelica</span> <PlayerPhoto />

                                </div>

                            </div>
                        </li>
                    </div>

                </div>

                <div className="u-ph-1bl u-vspace-2bl">

                    <div className="u-pos-relative u-vspace-2bl">
                        <p className="u-size-h4"><label>Comments:</label></p>
                        <textarea placeholder="Tell us what went down" className="u-width-100pc u-height-5rem"></textarea>
                    </div>

                    <div className="u-flex u-ai-center u-hspace-05bl u-size-14px">
                        
                        <PlayerPhoto /> <span className="o-dictate">Christy Quinn</span> <span>Christy will have 24 hours to respond to your dispute.</span>
                    </div>

                    <a href="#open-dispute" className="c-button c-button--default">Open dispute</a>

                </div>

            </div>

        </div>

    </section>
    {/* /DISPUTING - WRONG SCORE */}

    {/* DISPUTING - DIDN'T HAPPEN */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

        <footer className="u-ph-1bl">
            <a href="#dispute-match" className="c-button u-mt-1bl" disabled>Disputing match&hellip;</a>
        </footer>

    </section>
    
    <hr className="c-hr" />

    <section>

        <div id="open-dispute" className="u-vspace-2bl">

            <div className="o-container u-ph-1bl">

                <header className="u-flex u-jc-between u-ai-center">
                    <h1 id="start-dispute" className="u-size-h1 u-color-white">Dispute</h1>

                    <a href="#" className="u-color-hotmelon">Cancel</a>
                </header>

            </div>

            <nav className="u-bgcolor-fold u-pt-2bl">
                <ul className="u-flex u-ph-1bl u-hspace-1bl">
                    <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-playdough u-color-white@hover u-bgcolor-floor05">Wrong scores</a></li>

                    <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-white u-bgcolor-floor u-borrad-3300 u-size-h4">Didn't happen</a></li>
                </ul>
            </nav>

            <div className="o-container u-vspace-3bl">

                <div className="u-ph-1bl u-vspace-2bl">

                    <div className="u-pos-relative u-vspace-2bl">
                        <p className="u-size-h4"><label>Comments:</label></p>
                        <textarea placeholder="Tell us what went down" className="u-width-100pc u-height-5rem"></textarea>
                    </div>

                    <div className="u-flex u-ai-center u-hspace-05bl u-size-14px">
                        
                        <PlayerPhoto /> <span className="o-dictate">Christy Quinn</span> <span>Christy will have 24 hours to respond to your dispute.</span>
                    </div>

                    <a href="#open-dispute" className="c-button c-button--default">Open dispute</a>

                </div>

            </div>

        </div>

    </section>
    {/* /DISPUTING - DIDN'T HAPPEN */}

    {/* DISPUTED - ACCEPT/DECLINE THEIR SCORE */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

    </section>
    
    <hr className="c-hr" />

    <section>

        <div id="open-dispute" className="u-vspace-2bl">

            <div className="o-container u-ph-1bl u-vspace-2bl">

                <header className="u-flex u-jc-between u-ai-center">
                    <h1 id="start-dispute" className="u-size-h1 u-color-white">Disputed match</h1>
                </header>

                <p className="u-size-h4">You have <span className="u-color-white">22 hours</span> to respond to this dispute.</p>
                
                <p className="u-flex u-ai-center u-hspace-05bl"><PlayerPhoto /> <span>Christy sent an amended score for this match:</span></p>

            </div>

            <div className="o-container u-vspace-3bl">
                
                <Match />

                <div className="u-ph-1bl u-vspace-1bl">

                    <a href="#open-dispute" className="c-button c-button--default">Accept score</a>

                    <a href="#open-dispute" className="c-button c-button--warning">Disagree</a>

                </div>

            </div>

        </div>

    </section>
    {/* /DISPUTED - ACCEPT/DECLINE THEIR SCORE */}

    {/* DISPUTED - YOU SENT SCORE */}
    <section className="o-container u-vspace-3bl">

        <Scoresheet />

    </section>
    
    <hr className="c-hr" />

    <section>

        <div id="open-dispute" className="u-vspace-2bl">

            <div className="o-container u-ph-1bl u-vspace-2bl">

                <header className="u-flex u-jc-between u-ai-center">
                    <h1 id="start-dispute" className="u-size-h1 u-color-white">Disputed match</h1>
                </header>

                <p className="u-size-h4">Angela has <span className="u-color-white">22 hours</span> to respond to your dispute.</p>
                
                <p className="u-flex u-ai-center u-hspace-05bl"><PlayerPhoto /> <span>You sent an amended score for this match:</span></p>

            </div>

            <div className="o-container u-vspace-3bl">
                
                <Match />

                <div className="u-ph-1bl u-vspace-1bl">

                    <a href="#open-dispute" className="c-button c-button--warning">Cancel dispute</a>

                </div>

            </div>

        </div>

    </section>
    {/* /DISPUTED - YOU SENT SCORE */}

    {/* CANCELLED */}
    <section className="o-container u-vspace-3bl">

        <p className="u-flex u-ai-center u-weight-bold u-color-hotmelon">This match was disputed and could not be resolved.</p>

        <div className="u-opac-05">
            <Scoresheet />
        </div>

    </section>
    {/* /CANCELLED */}

<Footer />

</Template>
);

export default ResultScreen;
