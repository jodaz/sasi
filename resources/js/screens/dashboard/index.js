import React from 'react';
import { Title } from 'react-admin';
import { useAuth } from '../../utils';
import Totals from './Total';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

export default function Dashboard() {
  const auth = useAuth();

  return (
    <Grid container spacing={3}>
      <Title title='Inicio' />
      <Grid item xs={4}>
        <Totals />
      </Grid>
      <Grid item xs={8}>
        {[]}
      </Grid>
    </Grid>
  );
};

