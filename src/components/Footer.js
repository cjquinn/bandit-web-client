import PropTypes from 'prop-types';
import React from 'react';

const Footer = () => (

    <footer>

        <hr class="c-hr" />

        <div class="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">

            <select class="u-color-playdough">
                <option selected="">Britannia Squash</option>
                <optgroup label="Switch club:">
                    <option>Shoreditch Park Squash</option>
                    <option>Coolhurst London Premier League Squash</option>
                </optgroup>
            </select>

            <a href="/invite-player.php" class="u-color-playdough">Invite player</a>

        </div>

    </footer>
);

export default Footer;
