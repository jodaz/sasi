import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';

const routes = [
  {
    path: '/home',
    name: 'Inicio',
    icon: <DashboardIcon />
  },
  {
    path: '/settings',
    name: 'Configuraciones',
    icon: <SettingsIcon /> 
  }
];

export default routes; 

