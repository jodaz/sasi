import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  fluid: false,
  label: false,
  sublabel: false
};

const getClasses = (isOpen) => (
  (isOpen) ? 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl show' : 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl'
);

const Dropdown = (props) => {

  const { children, isOpen, onClose } = props;

  const [classNames, setClassNames] = useState(getClasses(isOpen));

//  const dropdownRef = useRef();

  const handleEsc = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  }
  
  /**
  const handleClickOutside = (e) => {
    if (dropdown.current && !dropdownRef.current.contains(e.target)) {
      onClose();
    }
  } **/

  useEffect(() => {/**
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keyDown', handleEsc);
**/
    setClassNames( getClasses(isOpen) );
    /**    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    } **/
  }, [isOpen]);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

Dropdown.defaultProps = {
  isOpen: false
}

export default Dropdown;
