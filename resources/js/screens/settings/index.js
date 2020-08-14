import React, { useEffect } from 'react';
import Layout from '../layouts';
import {
  Meta,
  Col,
  Row,
  PrivateRoute,
  ToastWrapper,
  Success
} from '../../components';
// Components
import NewCategory from './NewCategory';
import Categories from './Categories';
import Communities from './Communities';
import Users from './Users';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { isEmpty } from '../../utils';

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

const Index = () => {
  const notification = useSelector(store => store.notification);

  useEffect(() => {
    if (!isEmpty(notification)) {
      return Success(notification.message); 
    }  
  }, [notification]);
  
  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path='/settings' component={Settings} />

        <PrivateRoute exact path='/settings/new-category' component={NewCategory}/>
      </Switch>
      <ToastWrapper />
    </Layout>
  );
}
  
export default Index;
