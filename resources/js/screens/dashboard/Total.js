import React, { useState, useEffect } from "react";
import {
  Card,
  useTheme,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {
  Loading,
} from 'react-admin';
// Icons
import GetAppIcon from '@material-ui/icons/GetApp';
import CheckIcon from '@material-ui/icons/Check';
// Axios
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

const Total = props => {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    axios.get('analytics/home')
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    (isLoading)
    ? <Loading />
    : 
    data.map((item, key) =>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.amount}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.name}
            </Typography>
          </CardContent>
        </div>
      </Card>
    )
  );
};

export default Total;
