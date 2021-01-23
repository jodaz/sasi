import * as React from "react";
import { Card, CardHeader, CardContent  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  DateField,
  EditButton,
  NumberField,
  TextField,
  BooleanField,
  useTranslate,
  RecordMap,
  Identifier,
  Record,
} from 'react-admin';
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';

const useListStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
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

  return (
    <div style={{ margin: '1em' }}>
      {ids.map(id => (
        <Card key={id} className={classes.card}>
          <CardHeader
            title={
              <div className={classes.cardTitleContent}>
                <span>
                  <TextField record={data[id]} source="title" />
                </span>
              </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <span className={classes.cardContentRow}>

            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default MobileGrid;
