import React, {
  useEffect,
  useState,
  useMemo
} from 'react';
import axios from 'axios';
import { 
  Portlet,
  PortletBody,
  PortletHeader,
  Table,
  Loading
} from '../../components';

const Categories = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => setData(res.data))
      .then(() => setLoading(false))
      .catch(err => Error('Ha ocurrido un error'));
  }, []);

  const columns = useMemo(() => [
    { header: 'Nombre', accessor: 'name' },
  ], []);

  return (
    <Portlet>
      { (loading) ? (
          <PortletBody>          
            <Loading />
          </PortletBody>
      ) : (<>
        <PortletHeader label='Categorías' />
        <PortletBody>
          <Table columns={columns} data={data} />
        </PortletBody>
      </>)}
    </Portlet> 
  );
};

export default Categories;
