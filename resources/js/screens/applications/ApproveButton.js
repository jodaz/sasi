import * as React from "react";
import {
  useRefresh,
  useNotify,
  Button,
} from 'react-admin';
import { ButtonMenu } from '../../components';
import GradeIcon from '@material-ui/icons/Grade';
import {
  Dialog,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import IconCancel from '@material-ui/icons/Cancel';
import IconCheck from '@material-ui/icons/CheckCircleOutline';
import axios from 'axios';
import isEmpty from 'is-empty';
import { apiURL } from '../../config';

export default function (props) {
  const { onClick, record, ...rest } = props;
  const [showDialog, setShowDialog] = React.useState(false);
  const notify = useNotify();
  const refresh = useRefresh();

  const handleClick = () => {
      setShowDialog(true);
  };

  const handleCloseClick = () => {
      setShowDialog(false);
  };

  const handleApprove = async () => {
    const { response, error } = await axios.put(`${apiURL}/applications/${record.id}`)
      .then(res => ({ response: res.data }))
      .catch(error => ({ error: error.message.data }));

    if (!isEmpty(response)) {
      setShowDialog(false);
      refresh();
      notify(`¡Ha aprobado la solicitud #${record.num}`);
    }
  };

  return (<>
    <ButtonMenu
      label='Aprobar'
      icon={<GradeIcon />}
      onClick={() => {
        handleClick();
        onClick();
      }}
      {...rest}
    />

    <Dialog
      fullWidth
      open={showDialog}
      onClose={handleCloseClick}
      aria-label={'Aprobar solicitud'}
    >
      <DialogTitle>¿Realmente desea aprobar la solicitud #{record.num}?</DialogTitle>
      <DialogActions>
        <Button
          label="Cancelar"
          onClick={handleCloseClick}
        >
          <IconCancel />
        </Button>
        <Button
          label="Aprobar"
          alignIcon="right"
          onClick={handleApprove}
          color="primary"
        >
          <IconCheck />
        </Button>
      </DialogActions>
    </Dialog>
  </>);
}