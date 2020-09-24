import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { isEmpty } from '../utils';
import { Actions } from '../store';

export default function Notification() {
  const [open, setOpen] = useState(false);
  const notification = useSelector(store => store.notification);
  const dispatch = useDispatch();

  const handleClick = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(Actions.clearNotification());
    setOpen(false);
  }

  useEffect(() => {
    if (!isEmpty(notification)) {
      setOpen(true);
    }
  }, [notification]);

  return (
    <Snackbar
      autoHideDuration={3000}
      message={notification.message}
      open={open}
      onClose={handleClose}
      action={<>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
      </>}
    />
  );
};

