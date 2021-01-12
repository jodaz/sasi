import React from 'react';
import { Title } from 'react-admin';
import Totals from './Total';
import { Welcome } from '../../components';
import Chart from './Chart';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import NewApplication from './NewApplication';
import isEmpty from 'is-empty';

export default function Dashboard() {
  const { user } = useSelector(store => store.user);

  return (
    <Grid container spacing={3}>
      <Title title='Inicio' />

      <Grid item xs={12}>
        <Welcome title={'Sistema de Atención Social Integral'} />
      </Grid>

      <Totals />

      { (!isEmpty(user) && (user.role_id === 3)) &&
        <NewApplication profile={user.profile}/>
      }

      { (!isEmpty(user) && (user.role_id !== 3)) &&
        <Chart title={'Solicitudes por comunidad'}/>
      }
    </Grid>
  );
};

