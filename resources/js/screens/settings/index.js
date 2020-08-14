import React from 'react';
import Layout from '../layouts';
import {
  Meta,
  Col,
  Row,
  PrivateRoute
} from '../../components';
// Components
import NewCategory from './NewCategory';
import Categories from './Categories';
import Communities from './Communities';
import Users from './Users';
import { Route, Switch } from 'react-router-dom';

const Settings = () => (
  <>
    <Meta title="Configuraciones" />
    <Row>
      <Col md={6}>
        <Communities />
      </Col>
      <Col md={6}>
        <Categories />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Users />
      </Col>
    </Row>
  </>
);

const Index = () => (
  <Layout>
    <Switch>
      <PrivateRoute exact path='/settings' component={Settings} />

      <PrivateRoute exact path='/settings/new-category' component={NewCategory}/>
    </Switch>
  </Layout>
);

export default Index;
