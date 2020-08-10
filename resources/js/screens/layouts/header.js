import React, { useState } from 'react';
import { Dropdown, Notification } from '../../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions';

const getClasses = (isOpen) => (
  (isOpen) ? 'kt-header__topbar-item kt-header__topbar-item--user show' : 'kt-header__topbar-item kt-header__topbar-item--user'
);

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <div className="kt-header kt-grid__item  kt-header--fixed ">
      <div className="kt-header-menu-wrapper">
        <div className="kt-header-logo">
          <Link to="/">
            <img alt="Logo" src="logo-dark.png" />
          </Link>
        </div>
      </div>
      <div className="kt-header__topbar">
        <Dropdown>
          <Notification
            title='Cerrar sesión'
            onClick={() => handleLogout()}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
