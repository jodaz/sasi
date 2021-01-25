import React from 'react';
import UserIcon from '@material-ui/icons/People';
import UserList from './List';
import UserShow from './Show';

export default {
  name: 'users',
  list: UserList,
  user: UserShow,
  icon: <UserIcon />,
  options: {
    label: 'Usuarios'
  }
}
