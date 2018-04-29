import PropTypes from 'prop-types';
import React from 'react';

import Dispute from './Dispute';

const Disputes = () => (
    <section id="disputes" className="o-container">

        <header className="u-ph-1bl">
            <h1 className="u-size-h2 u-color-white">Disputes</h1>
        </header>

        <dl className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

            <Dispute />

        </dl>

    </section>
);

export default Disputes;
