import * as React from "react";
import {
  useCreate,
  FormWithRedirect,
  useTranslate,
  Title,
  TextInput,
  SimpleForm,
  SelectInput,
  Loading,
  useNotify,
  useCreateController,
  CreateContextProvider,
  useRedirect
} from 'react-admin';
import { Typography, Grid, makeStyles, InputLabel, Box } from '@material-ui/core';
import { useFetch } from '../../fetch';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  }
}));

const validator = (values) => {
  const errors = {};

  if (!values.rif || !values.rif.trim()) {
    errors.rif = ['Ingrese el RIF.'];
  }

  if (!values.address || !values.address.trim()) {
    errors.address = ['Ingrese la dirección.'];
  }

  if (!values.name || !values.name.trim()) {
    errors.name = ['Ingrese un nombre.'];
  }

  if (!values.community_id) {
    errors.community_id = ['Seleccione una comunidad.'];
  }

  if (!values.parish_id) {
    errors.parish_id = ['Seleccione una parroquia.'];
  }

  if (!values.organization_type_id) {
    errors.organization_type_id = ['Seleccione el tipo de la institución.'];
  }

  if (!values.category_id) {
    errors.category_id = ['Seleccione el sector al cual pertenece.'];
  }

  return errors;
}

const CustomCreate = props => {
  const [create] = useCreate('organizations');
  const classes = useStyles();
  const createControllerProps = useCreateController(props);
  const {
    defaultTitle,
    resource
  } = createControllerProps;
  const { isLoading, response: data } = useFetch('organizations/create');
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSave = React.useCallback((values) => {
    create({
      payload: { data: { ...values } }
    }, {
      onSuccess: ({ data: newRecord }) => {
        notify(`¡Ha creado la institución ${data.name}!`);
        redirect('/organizations');
      }
    })
  }, [create, notify, redirect]);

  return (
    <CreateContextProvider value={createControllerProps}>
      <Title title='Nueva institución' />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={10}>
          <Typography variant="h6" gutterBottom>
            Nueva institución
          </Typography>
          { (isLoading)
            ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
            : (
            <SimpleForm validate={validator} save={handleSave}>
              <div className={classes.root}>
                <Box width={1}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                      <SelectInput source="organization_type_id" choices={data.types} label='Tipo (*)' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextInput source="rif" label="RIF" resettable fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextInput source="name" label="Nombre" resettable fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                      <SelectInput source="parish_id" choices={data.parishes} label='Parroquia (*)' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <SelectInput source="community_id" choices={data.communities} label='Comunidad (*)' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextInput source="address" label="Dirección" resettable fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                      <SelectInput source="category_id" choices={data.categories} label='Sector (*)' fullWidth />
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </SimpleForm>
          )}
        </Grid>
      </Grid>
    </CreateContextProvider>
  );
}

const OrganizationCreate = (props) => (
  <CustomCreate {...props} />
);

export default OrganizationCreate;

