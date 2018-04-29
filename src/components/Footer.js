import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ children }) => (
    <footer>
        <hr className="c-hr" />

        <div className="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">
            {children}

            {/*
                <select className="u-color-playdough">
                    <option selected="">Britannia Squash</option>
                    <optgroup label="Switch club:">
                        <option>Shoreditch Park Squash</option>
                        <option>Coolhurst London Premier League Squash</option>
                    </optgroup>
                </select>

                <a href="/invite-player" className="u-color-playdough">Invite player</a>
            */}

            {/* Not logged into club
            <a href="/sign-out" className="u-color-playdough">Sign out</a> */}


            {/* Footer non-auth
            <a href="/create-club-unauthenticated" className="u-color-playdough">Create a Club</a>
            <a href="/request-password-reset" className="u-color-playdough">Reset password</a> */}


            {/* Footer creating club or registering (not auth)
            <a href="/sign-in" className="u-color-playdough">Sign in</a> */}

        </div>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Footer;
