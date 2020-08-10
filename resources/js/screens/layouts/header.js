import React, { useState } from 'react';
import { Dropdown, Notification } from '../../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleProfileClick = () => setIsProfileMenuOpen(!isProfileMenuOpen);

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
        <div className="kt-header__topbar-item kt-header__topbar-item--user">    
          <div className="kt-header__topbar-wrapper" onClick={handleProfileClick}>
            <div className="kt-header__topbar-user">
              <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
              <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
              <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
            </div>
          </div>
          <Dropdown
            isOpen={isProfileMenuOpen}
            onClose={() => setIsProfileMenuOpen(false)}
          >
            <Notification
              title='Cerrar sesión'
              url='/api/logout'
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
