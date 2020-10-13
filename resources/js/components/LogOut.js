import * as React from 'react';
import { forwardRef } from 'react';
import { logout } from '../actions';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const LogoutButton = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logout());

  return (
    <MenuItem
      onClick={handleClick}
      ref={ref}
    >
      <ExitIcon /> Cerrar sesión
    </MenuItem>
  );
});

export default LogoutButton;
