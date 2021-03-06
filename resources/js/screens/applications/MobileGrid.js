import * as React from "react";
import { Card, CardHeader, CardContent, ButtonBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRedirect, TextField } from 'react-admin';
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';

const useListStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    margin: '0.5rem 0',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: theme.typography.body1,
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem 0',
  },
}));

const MobileGrid = ({ ids, data, basePath }) => {
  const classes = useListStyles();
  const redirect = useRedirect();

  if (!ids || !data || !basePath) {
    return null;
  }

  return (
    <div style={{ margin: '1em' }}>
      {ids.map(id => (
        <ButtonBase className={classes.root} onClick={() => redirect(`applications/${id}/show`)}>
          <Card key={id} className={classes.card}>
            <CardHeader
              title={
                <div className={classes.cardTitleContent}>
                  <span>
                    <Typography variant="title">
                      {data[id].title}
                    </Typography>
                  </span>
                </div>
              }
            />
            <CardContent className={classes.cardContent}>
              <span className={classes.cardContentRow}>
                <Typography variant="subtitle">Número: </Typography>&nbsp;
                <TextField record={data[id]} source="num" />
              </span>
              <span className={classes.cardContentRow}>
                <Typography variant="subtitle">Enviada: </Typography>&nbsp;
                <TextField record={data[id]} source="created_at" />
              </span>
              <span className={classes.cardContentRow}>
                <Typography variant="subtitle">Categoría: </Typography>&nbsp;
                <TextField record={data[id]} source="category.name" />
              </span>
            </CardContent>
          </Card>
        </ButtonBase>
      ))}
    </div>
  );
}

export default MobileGrid;
