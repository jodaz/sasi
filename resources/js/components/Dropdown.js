import React, { useEffect, forwardRef, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const getClasses = (isOpen) => (
  (isOpen) ? 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl show' : 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-xl'
);

const Dropdown = forwardRef( function Dropdown(props, ref) {

  const { children, isOpen, onClose } = props;

  const [classNames, setClassNames] = useState(getClasses(isOpen));

  const dropdownRef = useRef();

  const handleEsc = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  }
  
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {    
    // document.addEventListener('click', handleClickOutside);
    document.addEventListener('keyDown', handleEsc);
    setClassNames( getClasses(isOpen) );
    console.log(isOpen); 
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen]);

  return (
    <div className={classNames} ref={ref}>
      <div ref={dropdownRef}>
        {children}
      </div>
    </div>
  );
});

Dropdown.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Dropdown;
