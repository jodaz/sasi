import React, { useState, useRef } from 'react';
import { useDetectOutsideClick } from '../utils';
import PropTypes from 'prop-types';

const getClasses = (isOpen) => (
  (isOpen) ? 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl show' : 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl'
);

const Dropdown = ({ children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='kt-header__topbar-item kt-header__topbar-item--user'>    
      <div className="kt-header__topbar-wrapper" onClick={onClick}>
        <div className="kt-header__topbar-user">
          <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
          <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
          <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
        </div>
      </div>

      <div className={getClasses(isActive)} ref={dropdownRef}>
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
}

export default Dropdown;
