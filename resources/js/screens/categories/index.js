import React from 'react';
import List from './List';
import Edit from './Edit';
import Create from './Create';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
    name: "categories",
    list: List,
    create: Create,
    edit: Edit,
    icon: <LocalOfferIcon />,
    options: {
      label: 'Categorías'
    }
}
