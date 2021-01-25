import * as React from "react";
import { Title, useShowController } from 'react-admin';
import {
  Card,
  CircularProgress,
  Grid,
  Typography,
  CardContent
} from '@material-ui/core';
import { CardProgress } from 'mui-extra';
import isEmpty from 'is-empty';

const ApplicationTitle = ({ record  }) => (
  <span>{record ? `${record.name}` : ''}</span>
);

const ApplicationShow = (props) => {
  const {
    basePath,
    loaded,
    loading,
    record,
  } = useShowController(props);

  return (
    <React.Fragment>
      <Title title={<ApplicationTitle {...props} />} />
      <Grid container spacing={4}>
        {(loading) ?(
          <CardProgress circular />
          ) : (
          <Card>
            <CardContent>
              <Typography variant="h6">{record.title}</Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {(loading) ?(
            <CardProgress circular />
          ) : (
            <Card>
              <CardContent>
                <Typography variant="subtitle">
                  {record.description}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {(loading) ?(
            <CardProgress circular />
          ) : (
            <Card>
              <CardContent>
                <Typography variant="subtitle">
                  {record.profile.fullName}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default function(props) {
  return <ApplicationShow {...props} />;
};
