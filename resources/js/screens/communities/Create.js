import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ApplicationCreate = (props) => { 

  return (
    <Create {...props} title='Nueva communidad'>
      <SimpleForm>
        <TextInput source='name' label='Nombre'/>
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

