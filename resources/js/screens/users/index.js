import React from 'react';
import UserIcon from '@material-ui/icons/People';
import UserList from './List';

export default {
  name: 'users',
  list: UserList,
  icon: <UserIcon />,
  options: {
    label: 'Usuarios'
  }
}
