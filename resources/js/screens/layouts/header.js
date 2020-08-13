import React, { useState } from 'react';
import {
  MenuNavLink,
  Dropdown,
  Notification,
  HeaderMenu,
  Header,
  HeaderTopBar,
  HeaderLogo,
  HeaderMenuWrapper
} from '../../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions';

const getClasses = (isOpen) => (
  (isOpen) ? 'kt-header__topbar-item kt-header__topbar-item--user show' : 'kt-header__topbar-item kt-header__topbar-item--user'
);

const Analyst = () => (<>
  <MenuNavLink to="/statistics">
    Estadísticas
  </MenuNavLink>
  <MenuNavLink to="/reports">
    Reportes
  </MenuNavLink>
</>);

const OnlyAdmin = () => (
  <MenuNavLink to="/settings">
    Configuraciones
  </MenuNavLink>
);

const AppMenu = ({ mobile }) => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);

  const handleLogout = () => dispatch(logout());

  return (
    <Header mobile={mobile}>
      <HeaderLogo to='/'>
        <img alt="Logo" src="logo-dark.png" />
      </HeaderLogo>
      <HeaderMenuWrapper>
        <HeaderMenu>
          <MenuNavLink to="/">
            Inicio
          </MenuNavLink>
          { 
            (user.role_id != 3) ? (
              (user.role_id == 1) ? (<>
                <Analyst /> 
                <OnlyAdmin />
              </>) : ( <Analyst /> )
            ) : <></>
          }
        </HeaderMenu>
      </HeaderMenuWrapper>
      <HeaderTopBar>
        <Dropdown user={user}>
          <Notification
            title='Cerrar sesión'
            onClick={() => handleLogout()}
          />
        </Dropdown>
      </HeaderTopBar>
    </Header>
  );
};

export default AppMenu;
