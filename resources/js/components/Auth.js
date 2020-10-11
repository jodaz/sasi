import React from 'react';
import { Notification, Title } from 'react-admin';
import {
  Avatar,
  Container,
  Box,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    padding: '1em',
    clear: 'both',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0
  },
}));

const Footer = (props) => (
  <Box component="footer" m={1} className={props.className}>
    Alcaldía del Municipio Bermúdez | Dirección de Estadísticas e Informática
  </Box >
);

export default function Auth(props) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <>
      <Title title={title} />
      <Container component="main" maxWidth="xs">

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            {title} 
          </Typography>

          {children}

          <Notification />
        </div>
      </Container>
      <Footer className={classes.footer}/>
    </>
  );
}
