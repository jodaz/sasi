import React from 'react';
import { Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PublicIcon from '@material-ui/icons/Public';
import AccessibleIcon from '@material-ui/icons/Accessible';
import CenterFocusStrong from '@material-ui/icons/CenterFocusStrong';

// Resources
import { UserList } from './users';
import {
  ApplicationShow,
  ApplicationCreate,
  ApplicationList
} from './applications';
import { CategoryList, CategoryEdit, CategoryCreate } from './categories';
import { AxisList, AxisEdit, AxisCreate } from './axes';
import { CommunityEdit, CommunityList, CommunityCreate } from './communities';
import { OrganizationCreate, OrganizationList } from './organizations';

export default [
  <Resource
    name="applications"
    show={ApplicationShow}
    list={ApplicationList}
    create={ApplicationCreate}
    icon={<TelegramIcon />}
    options={{
      label: 'Solicitudes'
    }}
  />,
  <Resource
    name="organizations"
    list={OrganizationList}
    create={OrganizationCreate}
    icon={<AccessibleIcon />}
    options={{
      label: 'Instituciones'
    }}
  />,
  <Resource
    name="users"
    list={UserList}
    icon={<UserIcon />}
    options={{
      label: 'Usuarios'
    }}
  />,
  <Resource 
    name='categories' 
    options={{
      label: 'Categorías'
    }}
    icon={<LocalOfferIcon />}
    list={CategoryList}
    create={CategoryCreate}
    edit={CategoryEdit}
  />,
  <Resource 
    name='axes' 
    options={{
      label: 'Ejes'
    }}
    icon={<CenterFocusStrong />}
    list={AxisList}
    create={AxisCreate}
    edit={AxisEdit}
  />,
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
];

