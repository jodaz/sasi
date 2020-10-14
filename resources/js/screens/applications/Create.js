import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  DateInput,
  SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ApplicationCreate = (props) => { 

  return (
    <Create {...props}>
      <SimpleForm>
        <RichTextInput
          source="description"
        />
        <SelectInput
          source="category"
          choices={[]} 
          label='Categoría'
        />
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

