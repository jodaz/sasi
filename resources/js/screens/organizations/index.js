import React from 'react';
import List from './List';
import Show from './Show';
import Create from './Create';
import AccessibleIcon from '@material-ui/icons/Accessible';

export default (rol) => {
  console.log(rol);
  return ({
    name: "organizations",
    list: List,
    create: (rol == 3) ? Create : null,
    icon: <AccessibleIcon />,
    show: Show,
    options: {
      label: 'Instituciones'
    }
  });
};
