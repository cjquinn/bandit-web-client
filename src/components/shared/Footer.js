import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ children }) => (
    <footer>
        <hr className="c-hr" />

        <div className="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">
            {children && children}
        </div>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Footer;
