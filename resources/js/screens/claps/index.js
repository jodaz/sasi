import React from 'react';
import List from './List';
import Create from './Create';
import Edit from './Edit';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export default {
  name: "claps",
  list: List,
  create: Create,
  edit: Edit,
  icon: <GroupWorkIcon />,
  options: {
    label: 'Claps'
  }
};

