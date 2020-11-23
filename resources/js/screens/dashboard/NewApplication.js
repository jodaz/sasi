import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  CircularProgress,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core';
import { useRedirect } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex'
  },
  cover: {
    display: 'flex',
    flex: '1 0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function NewApplication() {
  const classes = useStyles();
  const redirect = useRedirect();
  //const user = useSelector(store => store.user.user);
  const user = {
    full_name: 'Jesus Ordosgoitty',
    applications: []
  }

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardContent className={classes.details}>
          <Typography component="h5" variant="h5">
            {user.full_name}
          </Typography>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                redirect('applications/create'); 
              }}
              fullWidth
            >
              {'Nueva solicitud'}
            </Button>
          </CardActions>
        </CardContent>
        <div className={classes.cover}>
          <Typography variant="h2">
            {user.applications.length}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Solicitudes enviadas
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

