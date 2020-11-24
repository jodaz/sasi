import React from 'react';
import { Resource } from 'react-admin';

// Resources
import users from './users';
import applications from './applications';
import categories from './categories';
import communities from './communities';
import organizations from './organizations';

export default [
  <Resource {...applications } />,
  <Resource {...organizations} />,
  <Resource {...users}/>,
  <Resource {...categories} />,
  <Resource  {...communities} />
];

