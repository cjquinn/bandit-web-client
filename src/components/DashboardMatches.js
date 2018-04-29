import PropTypes from 'prop-types';
import React from 'react';

// Components
import Match from './Match';
import PlayerPhoto from './PlayerPhoto';

const DashboardMatches = () => (

    <section id="matches" className="o-container">

        <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">Matches</h1>
            <a href="/matches.php" className="c-go">Go</a>
        </header>

        <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
            
            <Match />
            <Match />
            <Match />

        </ol>

        <footer className="u-ph-1bl">
            <a href="/add-matches.php" className="c-button c-button--default u-mt-1bl">Add Matches</a>
        </footer>

    </section>

);

export default DashboardMatches;
