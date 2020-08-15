import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../layouts';
import RegularHome from './RegularHome';
import SpecialHome from './SpecialHome';
import { Row, Meta } from '../../components';

const Index = () => {
  const user = useSelector(store => store.auth.user);

  return (
    <Layout>
      <Meta title="Inicio" />
      <Row>
        { (user.role_id == 3) ? (
            <RegularHome />
          ) : (
            <SpecialHome />
          )
        }
      </Row>
    </Layout>
  );
};

export default Index;
