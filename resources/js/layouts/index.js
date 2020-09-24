import React from 'react';
import Navigation from './Navigation'; 
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  makeStyles,
  useTheme,
  Grid
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    marginLeft: "25%"
  }
}));

function DescriptionAlert(props) {
  const { success, message } = props;

  if (success) {
    return (<>
      <Alert severity="success">
        {message}
      </Alert>
    </>); 
  }
}

export default function Layout({ title, children }) {
  const classes = useStyles();
  const notification = useSelector(store => store.notification);

  return (<>
    <Helmet title={title} />

    <Container component="main" className={classes.container}>
      <Navigation />
      <Grid item xs={12}>
        {children}    
      </Grid>
    </Container>
  </>);
};

