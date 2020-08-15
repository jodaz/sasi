import React, {
  useEffect,
  useState,
  useMemo
} from 'react';
import axios from 'axios';
import { 
  Portlet,
  PortletBody,
  PortletToolbar,
  PortletHeader,
  Table,
  Icon,
  BtnLink,
  Loading
} from '../../components';

const Categories = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/communities')
      .then(res => setData(res.data))
      .then(() => setLoading(false))
      .catch(err => Error('Ha ocurrido un error'));
  }, []);

  const columns = useMemo(() => [
    { header: 'Nombre', accessor: 'name' },
    { header: 'Parroquia (s)', accessor: 'parish_names' },
  ], []);

  return (
    <Portlet>
      { (loading) ? (
          <PortletBody>          
            <Loading />
          </PortletBody>
      ) : (<>
        <PortletHeader label='Comunidades'>
          <PortletToolbar>
            <BtnLink to='/settings/new-community' styles='btn-sm btn-icon btn-clean btn-icon-md'>
              <Icon icon="plus" />
            </BtnLink>
          </PortletToolbar>
        </PortletHeader>
        <PortletBody>
          <Table columns={columns} data={data} />
        </PortletBody>
      </>)}
    </Portlet>
  );
};

export default Categories;
