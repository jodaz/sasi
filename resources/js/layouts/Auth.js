import React, { useState } from 'react';
import { Container, Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
});

const LinkBehaviour = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

const Footer = (props) => (
  <Box component="footer" m={1} className={props.className}>
    Alcaldía del Municipio Bermúdez | Dirección de Estadísticas e Informática
  </Box >
);

export default function Auth(props) {
  const { children, title } = props;
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">

        {children}

      </Container>
      <Footer className={classes.footer}/>
    </>
  );
}
