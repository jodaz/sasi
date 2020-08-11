import React from 'react';
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

const specialNavLinks = userRole => {
  const AdminAnalyst = () => (<>
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
  
  switch (userRole) {
    case "1": 
      return (<>
        <AdminAnalyst />
        <OnlyAdmin />
      </>);
    default:
      return <AdminAnalyst />;
  }
}

const AppMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);

  const handleLogout = () => dispatch(logout());

  return (
    <Header>
      <HeaderMenuWrapper>
        <HeaderLogo to='/'>
          <img alt="Logo" src="logo-dark.png" />
        </HeaderLogo>
        <HeaderMenu>
          <MenuNavLink to="/">
            Inicio
          </MenuNavLink>
          { 
            (user.role_id != 3) ? (
              specialNavLinks(user.role_id)
            ) : <></>
          }
        </HeaderMenu>
      </HeaderMenuWrapper>
      <HeaderTopBar>
        <Dropdown user>
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
