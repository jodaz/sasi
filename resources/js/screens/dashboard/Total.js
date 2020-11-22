import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  CircularProgress,
  Card,
  Grid,
  CardContent,
  Typography
} from '@material-ui/core';
import { apiURL } from '../../config';
import axios from 'axios';

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

function Analytics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`${apiURL}/analytics/home`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  return (<>
    <LoadingCards classes={classes} loading={isLoading} data={data.applications} />
    <LoadingCards classes={classes} loading={isLoading} data={data.users} />
  </>);
};

export default Analytics;
