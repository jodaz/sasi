import React from 'react';

import Layout from '../layouts';
import { 
  Meta, Portlet, Notification 
} from '../../components';

const Reports = () => {
  return (
    <Layout>
      <Meta title="Reportes" />
      <Portlet
        title='Solicitudes'
      >
        <Notification
          title="Histórico de solicitudes"
        />
        <Notification
          title="Por comunidad"
        />
        <Notification
          title="Por parroquia"
        />
        <Notification
          title="Por categoría"
        />
      </Portlet>
    </Layout>
  );
};

export default Reports;
