import React from 'react';
import { Title } from 'react-admin';
import Totals from './Total';
import { Welcome } from '../../components';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Title title='Inicio' />

      <Grid item xs={12}>
        <Welcome />
      </Grid>

      <Totals />
    </Grid>
  );
};

