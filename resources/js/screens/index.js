import React from 'react';
import { Resource } from 'react-admin';

// Resources
import users from './users';
import applications from './applications';
import categories from './categories';
import communities from './communities';
import organizations from './organizations';

export default [
  <Resource {...applications } key={1}/>,
  <Resource {...organizations} key={2}/>,
  <Resource {...users} key={3}/>,
  <Resource {...categories} key={4}/>,
  <Resource  {...communities} key={5}/>
];

