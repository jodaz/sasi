import React, {
  useEffect,
  useState,
  useMemo
} from 'react';
import axios from 'axios';
import Layout from '../layouts';
import { 
  Meta,
  Portlet,
  Notification,
  Table,
  Error,
  ToastWrapper,
  PortletBody,
  Loading
} from '../../components';

const Reports = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/applications')
      .then(res => setData(res.data))
      .then(() => setLoading(false))
      .catch(err => Error('Ha ocurrido un error'));
  }, []);

  const columns = useMemo(() => [
    { header: 'Título', accessor: 'title' },
    { header: 'Cantidad', accessor: 'quantity' },
    { header: 'Estado', accessor: 'state.name' }
  ], []);

  return (
    <Layout>
      <Meta title="Reportes" />
      <Portlet>
        <PortletBody>
          { (loading) ? (
            <Loading />
          ) : (
            <Table columns={columns} data={data} />
          )}
        </PortletBody>
      </Portlet>
      <ToastWrapper />
    </Layout>
  );
};

export default Reports;
