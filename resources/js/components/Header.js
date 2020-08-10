import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <div className="kt-header kt-grid__item  kt-header--fixed ">
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
