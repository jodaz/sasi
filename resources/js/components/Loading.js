import React, { useEffect } from 'react';import {
  CircularProgress,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  ); 
}
  
