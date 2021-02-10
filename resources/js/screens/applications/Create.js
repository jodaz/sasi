import * as React from "react";
import {
  useCreate,
  Title,
  NumberInput,
  TextInput,
  SimpleForm,
  SelectInput,
  Loading,
  useNotify,
  useCreateController,
  CreateContextProvider,
  useRedirect
} from 'react-admin';
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';
import { Typography, Grid, makeStyles, InputLabel, Box } from '@material-ui/core';
import { useFetch } from '../../fetch';

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

  if (!values.category) {
    errors.category = ['Seleccione una categoría.'];
  }

  return errors;
}

const ApplicationCreate = (props) => {
  const user = useSelector(store => store.user.user);
  const [create] = useCreate('applications');
  const classes = useStyles();
  const createControllerProps = useCreateController(props);
  const { isLoading, response: data } = useFetch('applications/create');
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSave = React.useCallback((values) => {
    create({
      payload: { data: { ...values } }
    }, {
      onSuccess: (response) => {
        const { data: res } = response;
        notify(`¡Su solicitud ha sido enviada con éxito!`);
        redirect('/home');
      }
    })
  }, [create, notify, redirect]);

  return (
    <CreateContextProvider value={createControllerProps}>
      <Title title='Nueva solicitud' />
      <Grid spacing={1}>
      { (isLoading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : (
          <SimpleForm validate={validator} save={handleSave}>
            <div className={classes.root}>
              <Grid container className={classes.child}>
                <TextInput source="title" label="Título" multiline fullWidth />
                <TextInput source="description" label="Mensaje" multiline fullWidth />
              </Grid>
              <Grid container>
                { (!isEmpty(user) && !isEmpty(user.profile.organizations)) &&
                  <Grid item xs={12} sm={12} md={4} className={classes.child}>
                    <SelectInput
                      label="Institución"
                      source="institution_id"
                      choices={user.profile.organizations} fullWidth
                    />
                  </Grid>
                }
                <Grid item xs={12} sm={12} md={4} className={classes.child}>
                  <SelectInput label="Categoría" source="category" choices={data} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.child}>
                  <NumberInput source="quantity" label='Elementos requeridos' fullWidth/>
                </Grid>
              </Grid>
            </div>
          </SimpleForm>
        )
      }
      </Grid>
    </CreateContextProvider>
  );
};

export default ApplicationCreate;

