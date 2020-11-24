import React from 'react';
import { Resource } from 'react-admin';

// Resources
import users from './users';
import applications from './applications';
import categories from './categories';
import claps from './claps';
import axes from './axes';
import communities from './communities';
import organizations from './organizations';

export default [
  <Resource {...applications } />,
  <Resource {...organizations} />,
  <Resource {...users}/>,
  <Resource {...axes} />,
  <Resource {...claps} />,
  <Resource {...categories} />,
  <Resource  {...communities} />
];

