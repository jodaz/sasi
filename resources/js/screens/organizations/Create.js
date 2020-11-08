import React, { useEffect, useState } from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  useQuery,
  Loading,
  Error
} from 'react-admin';
import { isEmpty } from '../../utils';

const validator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.description = ['Ingrese un asunto.'];
  }

  if (!values.categories.length) {
    errors.categories = ['Seleccione una categoría.'];
  }

  return errors;
}

const OrganizationCreate = (props) => { 
  const [communities, setCommunities] = useState({});
  const [parish, setParish] = useState(-1);
  const { data, loading, error } = useQuery({
    type: 'NEW', 
    resource: 'organizations'
  });

  useEffect(() => {
    if (parish !== -1) {
      const comm = data.parishes.filter((parish) =>
        parish.id === parish
      ); 
      () => setCommunities(comm); 
    }
  }, [parish]);
  
  useEffect(() => {
    if (!loading) {
      setCommunities(data.parishes[0].communities);
    }
  }, [loading]);

  return (
    <Create {...props} title="Nueva institución">
      { (loading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : ( 
        <SimpleForm>
          <SelectInput
            source="types"
            choices={data.types} 
            label='Tipo (*)'
            initialValue={1}
          />
          <TextInput
            source="rif"
            label="RIF"
          />
          <TextInput
            source="name"
            label="Nombre"
          />
          <SelectInput
            source="parishes"
            choices={data.parishes} 
            label='Parroquia (*)'
            onChange={e => setParish(e.target.value)}
            initialValue={1}
          />
          { (!isEmpty(communities)) && (
            <SelectInput
              source="communities"
              choices={communities} 
              label='Comunidad (*)'
              initialValue={1}
            />
          )}

          <TextInput
            source="address"
            label="Dirección"
          />
          <SelectInput
            source="categories"
            choices={data.categories} 
            label='Sector (*)'
            initialValue={1}
          />
        </SimpleForm>
      )}
    </Create>
  );
};

export default OrganizationCreate;

