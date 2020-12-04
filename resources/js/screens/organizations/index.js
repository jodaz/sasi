import React from 'react';
import List from './List';
import Show from './Show';
import Create from './Create';
import AccessibleIcon from '@material-ui/icons/Accessible';

export default {
    name: "organizations",
    list: List,
    create: Create,
    icon: <AccessibleIcon />,
    show: Show,
    options: {
      label: 'Instituciones'
    }
}
