import React from 'react';
import { Resource } from 'react-admin';

// Resources
import users from './users';
import applications from './applications';
import categories from './categories';
import communities from './communities';
import organizations from './organizations';
import help from './help';

export default (rol) => {
  return ([
    <Resource {...applications } key={1}/>,
    <Resource {...organizations} key={2}/>,
    (rol === 1) ? <Resource {...users} key={3}/> : null,
    (rol === 1) ? <Resource {...categories} key={4}/> : null,
    (rol === 1) ? <Resource {...communities} key={5} /> : null,
    (rol === 1) ? <Resource name='help' key={6} /> : null
  ])
};
