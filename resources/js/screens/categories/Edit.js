import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput
} from 'react-admin';

const CategoryEdit = (props) => { 
  return (
    <Edit {...props} title='Editar categoría'>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default CategoryEdit;

