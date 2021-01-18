import * as React from 'react';
import {
  makeStyles,
  CircularProgress,
  Card,
  Grid,
  CardContent,
  Typography
} from '@material-ui/core';
import { apiURL } from '../../config';
import { Chart } from 'mui-extra';
import axios from 'axios';
import isEmpty from 'is-empty';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(4)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  }
}));

const LoadingCards = ({ classes, loading, data }) => (
  <Grid item xs={6}>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          { (loading)
            ? <CircularProgress />
            : <>
              <Typography component="h5" variant="h5">
                {data.amount}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {data.name}
              </Typography>
            </>
          }
        </CardContent>
      </div>
    </Card>
  </Grid>
);

const colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

function Analytics() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState({});
  const [status, setStatus] = React.useState({});
  const [data, setData] = React.useState({});
  const classes = useStyles();

  React.useEffect(() => {
    axios.get(`${apiURL}/analytics/home`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (!isEmpty(data)) {
      let names = data.categories.map(item => item.name);
      let values = data.categories.map(item => item.value);

      let statusNames = data.status.map(item => item.name);
      let statusValues = data.status.map(item => item.value);

      setCategories({
        'labels': names,
        'values': values
      });
      setStatus({
        'labels': statusNames,
        'values': statusValues
      });
    }
  }, [data]);

  return (<>
    <LoadingCards classes={classes} loading={isLoading} data={data.applications} />
    <LoadingCards classes={classes} loading={isLoading} data={data.users} />
    <Grid item sm={6} xs={12}>
      <Chart
        name='Solicitudes por categoría'
        name='Solicitudes según estado'
        type='doughnut'
        height="400"
        width="350"
        loading={isLoading}
        labels={status.labels}
        data={status.values}
        borderWith={1}
      />
    </Grid>
    <Grid item sm={6} xs={12}>
      <Chart
        name='Categorías'
        type='pie'
        height="400"
        width="350"
        loading={isLoading}
        labels={categories.labels}
        data={categories.values}
        borderWith={1}
      />
    </Grid>
  </>);
};

export default Analytics;
