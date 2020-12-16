import * as React from 'react';
import { Title } from 'react-admin';
import {
  Typography
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/HelpOutline';

export function Help() {
  return (
    <Typography variant="h3">Manual de usuario</Typography>
  );
}

export default {
    name: "help",
    icon: <HelpIcon />,
    options: {
      label: 'Ayuda'
    }
}
