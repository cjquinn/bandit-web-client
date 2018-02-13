import PropTypes from 'prop-types';
import React from 'react';

import Dispute from '../components/Dispute';

const Disputes = () => (
    <section id="disputes" class="o-container">

        <header class="u-ph-1bl">
            <h1 class="u-size-h2 u-color-white">Disputes</h1>
        </header>

        <dl class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

            <Dispute />

        </dl>

    </section>
);

export default Disputes;
