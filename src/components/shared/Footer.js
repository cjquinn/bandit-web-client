import PropTypes from 'prop-types';
import React from 'react';

// Components
import Template from './Template';

const Footer = ({ children, isAuthenticated, signOut }) => (
    <footer>
        <hr className="c-hr" />

        <div className="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">
            {children 
                ? children
                : (
                    <Template>
                        <a
                            className="u-color-playdough"
                            href="mailto:referee@banditmatch.com"
                        >
                            Feedback &amp; Support
                        </a>

                        {isAuthenticated &&
                            <button
                                className="u-color-playdough"
                                onClick={signOut}
                            >
                                Sign out
                            </button>
                        }
                    </Template>
                )
            }
        </div>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired
};

export default Footer;
