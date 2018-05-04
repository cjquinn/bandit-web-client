import React from 'react';

// Components
import Footer from '../components/Footer';
import Match from '../components/Match';
import PlayerPhoto from '../components/PlayerPhoto';
import Scoresheet from '../components/Scoresheet';
import Template from '../components/Template';

const ResultScreen = () => (

<Template>

    <main class="o-main">

        <div class="o-container u-ph-1bl u-vspace-2bl">

            <a href="/results" className="c-go">Back to Matches</a>

        </div>

        <hr class="c-hr" />

        {/* PAST MATCH */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

        </section>
        {/* /PAST MATCH */}

        {/* YOU CREATED - CAN CANCEL MATCH */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

            <footer class="u-ph-1bl">
                <a href="#cancel-match" class="c-button c-button--warning u-mt-1bl">Cancel match</a>
            </footer>

        </section>
        {/* /YOU CREATED - CAN CANCEL MATCH */}

        {/* THEY CREATED - CAN DISPUTE MATCH */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

            <footer class="u-ph-1bl">
                <a href="#dispute-match" class="c-button c-button--warning u-mt-1bl">Dispute match</a>
            </footer>

        </section>
        {/* /THEY CREATED - CAN DISPUTE MATCH */}

        {/* DISPUTING - WRONG SCORE */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

            <footer class="u-ph-1bl">
                <a href="#dispute-match" class="c-button u-mt-1bl" disabled>Disputing match&hellip;</a>
            </footer>

        </section>
        
        <hr class="c-hr" />

        <section>

            <div id="open-dispute" class="u-vspace-2bl">

                <div class="o-container u-ph-1bl">

                    <header class="u-flex u-jc-between u-ai-center">
                        <h1 id="start-dispute" class="u-size-h1 u-color-white">Dispute</h1>

                        <a href="#" class="u-color-hotmelon">Cancel</a>
                    </header>

                </div>

                <nav class="u-bgcolor-fold u-pt-2bl">
                    <ul class="u-flex u-ph-1bl u-hspace-1bl">
                        <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-white u-bgcolor-floor">Wrong scores</a></li>
                        <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h4">Didn't happen</a></li>
                    </ul>
                </nav>

                <div class="o-container u-vspace-3bl">

                    <div class="u-vspace-2bl">

                        <p class="u-ph-1bl">What <em>were</em> the scores, Christy?</p>

                        <div class="u-borrad-first-2200 u-borrad-last-0022">
                            <li class="u-bgcolor-fold">
                                <div class="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

                                    <div class="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

                                        <dt class="u-size-h4 u-weight-bold u-ws-no">
                                            <span class="o-dictate">Teddy Austin </span> <input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span class="o-dictate">Angelica Hamlet </span><input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
                                        </dt>

                                    </div>

                                    <div class="u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">

                                        <PlayerPhoto /> <span class="o-ellipsis" aria-hidden="true">Teddy</span>

                                    </div>

                                    <div class="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

                                        <span class="o-ellipsis" aria-hidden="true">Angelica</span> <PlayerPhoto />

                                    </div>

                                </div>
                            </li>
                        </div>

                    </div>

                    <div class="u-ph-1bl u-vspace-2bl">

                        <div class="u-pos-relative u-vspace-2bl">
                            <p class="u-size-h4"><label>Comments:</label></p>
                            <textarea placeholder="Tell us what went down" class="u-width-100pc u-height-5rem"></textarea>
                        </div>

                        <div class="u-flex u-ai-center u-hspace-05bl u-size-14px">
                            
                            <PlayerPhoto /> <span class="o-dictate">Christy Quinn</span> <span>Christy will have 24 hours to respond to your dispute.</span>
                        </div>

                        <a href="#open-dispute" class="c-button c-button--default">Open dispute</a>

                    </div>

                </div>

            </div>

        </section>
        {/* /DISPUTING - WRONG SCORE */}

        {/* DISPUTING - DIDN'T HAPPEN */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

            <footer class="u-ph-1bl">
                <a href="#dispute-match" class="c-button u-mt-1bl" disabled>Disputing match&hellip;</a>
            </footer>

        </section>
        
        <hr class="c-hr" />

        <section>

            <div id="open-dispute" class="u-vspace-2bl">

                <div class="o-container u-ph-1bl">

                    <header class="u-flex u-jc-between u-ai-center">
                        <h1 id="start-dispute" class="u-size-h1 u-color-white">Dispute</h1>

                        <a href="#" class="u-color-hotmelon">Cancel</a>
                    </header>

                </div>

                <nav class="u-bgcolor-fold u-pt-2bl">
                    <ul class="u-flex u-ph-1bl u-hspace-1bl">
                        <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-playdough u-color-white@hover u-bgcolor-floor05">Wrong scores</a></li>

                        <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-white u-bgcolor-floor u-borrad-3300 u-size-h4">Didn't happen</a></li>
                    </ul>
                </nav>

                <div class="o-container u-vspace-3bl">

                    <div class="u-ph-1bl u-vspace-2bl">

                        <div class="u-pos-relative u-vspace-2bl">
                            <p class="u-size-h4"><label>Comments:</label></p>
                            <textarea placeholder="Tell us what went down" class="u-width-100pc u-height-5rem"></textarea>
                        </div>

                        <div class="u-flex u-ai-center u-hspace-05bl u-size-14px">
                            
                            <PlayerPhoto /> <span class="o-dictate">Christy Quinn</span> <span>Christy will have 24 hours to respond to your dispute.</span>
                        </div>

                        <a href="#open-dispute" class="c-button c-button--default">Open dispute</a>

                    </div>

                </div>

            </div>

        </section>
        {/* /DISPUTING - DIDN'T HAPPEN */}

        {/* DISPUTED - ACCEPT/DECLINE THEIR SCORE */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

        </section>
        
        <hr class="c-hr" />

        <section>

            <div id="open-dispute" class="u-vspace-2bl">

                <div class="o-container u-ph-1bl u-vspace-2bl">

                    <header class="u-flex u-jc-between u-ai-center">
                        <h1 id="start-dispute" class="u-size-h1 u-color-white">Disputed match</h1>
                    </header>

                    <p class="u-size-h4">You have <span class="u-color-white">22 hours</span> to respond to this dispute.</p>
                    
                    <p class="u-flex u-ai-center u-hspace-05bl"><PlayerPhoto /> <span>Christy sent an amended score for this match:</span></p>

                </div>

                <div class="o-container u-vspace-3bl">
                    
                    <Match />

                    <div class="u-ph-1bl u-vspace-1bl">

                        <a href="#open-dispute" class="c-button c-button--default">Accept score</a>

                        <a href="#open-dispute" class="c-button c-button--warning">Disagree</a>

                    </div>

                </div>

            </div>

        </section>
        {/* /DISPUTED - ACCEPT/DECLINE THEIR SCORE */}

        {/* DISPUTED - YOU SENT SCORE */}
        <section class="o-container u-vspace-3bl">

            <Scoresheet />

        </section>
        
        <hr class="c-hr" />

        <section>

            <div id="open-dispute" class="u-vspace-2bl">

                <div class="o-container u-ph-1bl u-vspace-2bl">

                    <header class="u-flex u-jc-between u-ai-center">
                        <h1 id="start-dispute" class="u-size-h1 u-color-white">Disputed match</h1>
                    </header>

                    <p class="u-size-h4">Angela has <span class="u-color-white">22 hours</span> to respond to your dispute.</p>
                    
                    <p class="u-flex u-ai-center u-hspace-05bl"><PlayerPhoto /> <span>You sent an amended score for this match:</span></p>

                </div>

                <div class="o-container u-vspace-3bl">
                    
                    <Match />

                    <div class="u-ph-1bl u-vspace-1bl">

                        <a href="#open-dispute" class="c-button c-button--warning">Cancel dispute</a>

                    </div>

                </div>

            </div>

        </section>
        {/* /DISPUTED - YOU SENT SCORE */}

        {/* CANCELLED */}
        <section class="o-container u-vspace-3bl">

            <p class="u-flex u-ai-center u-weight-bold u-color-hotmelon">This match was disputed and could not be resolved.</p>

            <div class="u-opac-05">
                <Scoresheet />
            </div>

        </section>
        {/* /CANCELLED */}

<Footer />

</main>

</Template>
);

export default ResultScreen;
