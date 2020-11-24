import React from 'react';
import List from './List';
import Create from './Create';
import AccessibleIcon from '@material-ui/icons/Accessible';

export default {
    name: "organizations",
    list: List,
    create: Create,
    icon: <AccessibleIcon />,
    options: {
      label: 'Instituciones'
    }
}
