import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../layouts';
import ApplicationsList from './ApplicationsList';
import RegularHome from './RegularHome';
import { Col, Row, Meta } from '../../components';

const Index = () => {
  const user = useSelector(store => store.auth.user);

  return (
    <Layout>
      <Meta title="Inicio" />
      <Row>
        <Col md={8}>
          { 
            (user.role_id == 3) ? (
              <RegularHome />
            ) : (
              <ApplicationsList />
            )
          }
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
