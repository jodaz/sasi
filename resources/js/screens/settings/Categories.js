import React, {
  useEffect,
  useState,
  useMemo
} from 'react';
import axios from 'axios';
import { 
  Portlet,
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
    <>
      { (loading) ? (
        <Portlet>
          <Loading />
        </Portlet>
      ) : (
        <Portlet label='Categorías'>
          <Table columns={columns} data={data} />
        </Portlet>
      )}
    </>
  );
};

export default Categories;
