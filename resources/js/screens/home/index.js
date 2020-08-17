import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layouts';
import ApplicationsList from './ApplicationsList';
import NewApplication from './NewApplication';
import {
  PrivateRoute,
  Col,
  Row,
  Meta,
  Portlet,
  Loading,
  Heading,
  Notification,
  PortletBody
} from '../../components';
import { Link, Switch } from 'react-router-dom';
import { isEmpty } from '../../utils';

const Home = () => {
  const user = useSelector(store => store.auth.user);

  if (isEmpty(user)) return <Loading />

  return (
    <Row>
      <Meta title="Inicio" />
      <Col md={8}>
        { 
          (user.role_id == 3)
          ? (<>
              <Portlet>
                <PortletBody>
                  <Link to='/home/new-application'>
                    <Notification title='Nueva solicitud' icon='paper-plane'/>
                  </Link>
                </PortletBody>
              </Portlet>
              
              <Heading>
                Mis solicitudes pendientes
              </Heading>

              <ApplicationsList />
            </>)
          : (<>
              <Heading>
                Solicitudes por revisar
              </Heading>

              <ApplicationsList />
          </>)
        }
      </Col>
    </Row>
  );
};

const Index = () => (
  <Layout>
    <Switch>
      <PrivateRoute exact path='/home' component={Home} />

      <PrivateRoute exact path='/home/new-application' component={NewApplication} />
    </Switch>
  </Layout>
);

export default Index;
