import PropTypes from 'prop-types';
import React from 'react';

// Components
import Match from './Match';
import PlayerPhoto from './PlayerPhoto';

const DashboardMatches = () => (

    <section id="matches" className="o-container">

        <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">Matches <span className="u-weight-normal u-color-steam">recent</span></h1>
            <a href="/results" className="c-go">Go</a>
        </header>

        <ol className="u-mt-2bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            
            <Match />
            <Match />
            <Match />

        </ol>

        <footer className="u-ph-1bl u-mt-1bl">
            <button type="button" className="c-button c-button--default">Add Matches</button>
        </footer>

    </section>

);

export default DashboardMatches;
