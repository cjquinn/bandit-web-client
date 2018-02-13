import PropTypes from 'prop-types';
import React from 'react';

const Template = ({ children }) => children;

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Template;
