import React from 'react';
import {  Resource } from 'react-admin';
// Icons
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PublicIcon from '@material-ui/icons/Public';
import AccessibleIcon from '@material-ui/icons/Accessible';

// Resources
import { UserList } from './screens/users';
import { ApplicationCreate, ApplicationList } from './screens/applications';
import { CategoryList, CategoryEdit, CategoryCreate } from './screens/categories';
import { CommunityEdit, CommunityList, CommunityCreate } from './screens/communities';
import { OrganizationCreate, OrganizationList } from './screens/organizations';

export default () => (
  <>
    <Resource
      name="applications"
      list={ApplicationList}
      create={ApplicationCreate}
      icon={<TelegramIcon />}
      options={{
        label: 'Solicitudes'
      }}
   />
    <Resource
      name="organizations"
      list={OrganizationList}
      create={OrganizationCreate}
      icon={<AccessibleIcon />}
      options={{
        label: 'Instituciones'
      }}
   />
    <Resource
      name="users"
      list={UserList}
      icon={<UserIcon />}
      options={{
        label: 'Usuarios'
      }}
   />
    <Resource 
      name='categories' 
      options={{
        label: 'Categorías'
      }}
      icon={<LocalOfferIcon />}
      list={CategoryList}
      create={CategoryCreate}
      edit={CategoryEdit}
    />
    <Resource 
      name='communities' 
      options={{
        label: 'Comunidades'
      }}
      icon={<PublicIcon />}
      list={CommunityList}
      create={CommunityCreate}
      edit={CommunityEdit}
    />
  </>
);

