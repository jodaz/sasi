import React, { useState, useRef, useEffect } from 'react';
import Layout from '../layouts';
import {
  Meta,
  Portlet,
  PortletHeader,
  Heading,
  Col,
  Loading,
  Row,
  PortletBody
} from '../../components';
import axios from 'axios';
import { isEmpty } from '../../utils';

import ApplicationsCategories from './ApplicationsCategories';
import ApplicationsByState from './ApplicationsByState';

const Statistics = () => {
  return (
    <Layout>
      <Meta title="Estadísticas" />

      <Heading>Estadísticas</Heading>
      <Row>
        <Col md={6} sm={12}>
          <ApplicationsCategories />
        </Col>
        <Col md={6} sm={12}>
          <ApplicationsByState />
        </Col>
      </Row>
    </Layout>
  );
};

export default Statistics;
