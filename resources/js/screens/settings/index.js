import React from 'react';

import Layout from '../layouts';
import {
  Meta,
  Col,
  Row
} from '../../components';
// Components
import Categories from './Categories';
import Communities from './Communities';

const Settings = () => {
  return (
    <Layout>
      <Meta title="Configuraciones" />
      <Row>
        <Col md={6}>
          <Communities />
        </Col>
        <Col md={6}>
          <Categories />
        </Col>
      </Row>
    </Layout>
  );
};

export default Settings;
