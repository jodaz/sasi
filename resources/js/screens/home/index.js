import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../layouts';
import RegularHome from './RegularHome';
import SpecialHome from './SpecialHome';
import { Meta } from '../../components';

const Index = () => {
  const user = useSelector(store => store.auth.user);

  return (
    <Layout>
      <Meta title="Inicio" />
      { (user.role_id == 3) ? (
          <RegularHome />
        ) : (
          <SpecialHome />
        )
      }
    </Layout>
  );
};

export default Index;
