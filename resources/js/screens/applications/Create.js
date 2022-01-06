import * as React from "react";
import {
  Title,
  NumberInput,
  TextInput,
  SimpleForm,
  SelectInput,
  useNotify,
  useCreateController,
  CreateContextProvider,
  useRedirect,
  ReferenceInput,
  useMutation
} from 'react-admin';
import { 
  Typography, 
  Grid, 
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  child: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const validator = (values) => {
  const errors = {};

  if (values.title) {
    if (values.title.length > 100) {
      errors.title = ['El máximo número de caracteres permitidos es 100.'];
    }
  }
  if (!values.title || !values.title.trim()) {
    errors.title = ['Ingrese un título.'];
  }
  if (!values.description || !values.description.trim()) {
    errors.description = ['Ingrese un asunto.'];
  }
  if (values.description) {
    if (values.description.length > 500) {
      errors.description = ['El máximo número de caracteres permitidos es 500.'];
    }
  }
  if (!values.category_id) {
    errors.category_id = ['Seleccione una categoría.'];
  }
  if (!values.parish_id) {
    errors.parish_id = ['Seleccione una parroquia.'];
  }
  if (!values.community_id) {
    errors.community_id = ['Seleccione una comunidad.'];
  }

  return errors;
}

const optionRenderer = choice => `${choice.name}`;

const parishes = [
  { id: 1, name: "BOLÍVAR" },
  { id: 2, name: "MACARAPANA" },
  { id: 3, name: "SANTA CATALINA" },
  { id: 4, name: "SANTA ROSA" },
  { id: 5, name: "SANTA TERESA" }
]

const ApplicationCreate = (props) => {
  const classes = useStyles();
  const createControllerProps = useCreateController(props);
  const [mutate, { loaded, data }] = useMutation();
  const redirect = useRedirect()
  const notify = useNotify();

  const handleSave = React.useCallback(async (values) => {
      try {
          await mutate({
              type: 'create',
              resource: props.resource,
              payload: { data: values }
          }, { returnPromise: true })
      } catch (error) {
          if (error.response.data.errors) {
              return error.response.data.errors;
          }
      }
  }, [mutate])

  React.useEffect(() => {
      if (loaded) {
          redirect('/applications')
          notify(`¡Ha creado una nueva solicitud`)
      }
  }, [loaded])

  return (
    <CreateContextProvider value={createControllerProps}>
      <Title title='Nueva solicitud' />
      <SimpleForm validate={validator} save={handleSave}>
        <div className={classes.root}>
          <Grid container>
            <Grid container>
              <Typography variant="subtitle1">
                Nueva solicitud
              </Typography>
              <Grid container className={classes.child}>
                <TextInput source="title" label="Título" multiline fullWidth />
                <TextInput source="description" label="Mensaje" multiline fullWidth />
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={4} className={classes.child}>
                  <ReferenceInput label="Categoría" source="category_id" reference="categories">
                    <SelectInput optionText={optionRenderer} source="name" fullWidth />
                  </ReferenceInput>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.child}>
                  <NumberInput source="quantity" label='Elementos requeridos' fullWidth/>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant="subtitle1">
                  Datos del solicitante
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextInput source="name" label="Nombre" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextInput source="dni" label="Cédula" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectInput optionText={optionRenderer} source="name" choices={parishes} fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <ReferenceInput label="Comunidad" source="community_id" reference="communities">
                  <SelectInput optionText={optionRenderer} source="name" fullWidth />
                </ReferenceInput>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </SimpleForm>
    </CreateContextProvider>
  );
};

export default ApplicationCreate;

