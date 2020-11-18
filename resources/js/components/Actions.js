import React, { useEffect } from "react";
import {
  useNotify,
  useDelete,
  useRefresh,
  useRedirect,
} from 'react-admin';
import ButtonMenu from './ButtonMenu';
// Icons
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

const ref =  React.createRef();

const MenuActions = props => {
  const refresh = useRefresh();
  const redirect = useRedirect();
  const notify = useNotify();
  const { resource, basePath, shouldEdit, record } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [deleteOne, {
    data,
    loaded,
    error
  }] = useDelete(resource, record.id);

  useEffect(async () => {
    if (loaded) {
      await notify(data.message);
      await refresh();
    }
  }, [loaded]);

  if (error) return notify('Ha ocurrido un error');

  const handleClick = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="Opciones"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '16ch',
          },
        }}
      >
        { (shouldEdit) &&
          <ButtonMenu
            label='Editar'
            icon={< EditIcon />}
            onClick={() => {
              redirect(basePath + '/' + record.id);
              handleClose();
            }}
            ref={ref}
          />
        }
        <ButtonMenu
          label='Eliminar'
          icon={<DeleteIcon />}
          onClick={
            (e) => {
              deleteOne();
              handleClose();
          }}
          ref={ref}
        />
      </Menu>
    </div>
  );
};

export default MenuActions;

