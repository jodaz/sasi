import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';

const CategoryCreate = (props) => { 

  return (
    <Create {...props} title='Nueva categoría'>
      <SimpleForm>
        <TextInput source='name' label='Nombre'/>
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;

