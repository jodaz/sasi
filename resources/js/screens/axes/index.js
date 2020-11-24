import React from 'react';
import List from './List';
import Edit from './Edit';
import Create from './Create';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

export default {
    name: "axes",
    list: List,
    create: Create,
    edit: Edit,
    icon: <CenterFocusWeakIcon />,
    options: {
      label: 'Ejes'
    }
}
