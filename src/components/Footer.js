import PropTypes from 'prop-types';
import React from 'react';

const Footer = () => (

    <footer>

        <hr class="c-hr" />

        <div class="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">

            {/* Logged into club */}
            <select class="u-color-playdough">
                <option selected="">Britannia Squash</option>
                <optgroup label="Switch club:">
                    <option>Shoreditch Park Squash</option>
                    <option>Coolhurst London Premier League Squash</option>
                </optgroup>
            </select>

            <a href="/invite-player" class="u-color-playdough">Invite player</a>

            

            {/* Not logged into club
            <a href="/sign-out" class="u-color-playdough">Sign out</a> */}


            {/* Footer non-auth
            <a href="/create-club-unauthenticated" class="u-color-playdough">Create a Club</a>
            <a href="/request-password-reset" class="u-color-playdough">Reset password</a> */}


            {/* Footer creating club or registering (not auth)
            <a href="/sign-in" class="u-color-playdough">Sign in</a> */}

        </div>

    </footer>
);

export default Footer;
