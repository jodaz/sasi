import * as React from "react";
import {
  useMutation,
  useNotify,
  useUpdate,
  useDelete,
  useRedirect,
} from 'react-admin';
// Icons
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Menu,
  MenuItem,
  Typography,
  ListItemIcon
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { download } from '../../utils';

const ITEM_HEIGHT = 48;

const ButtonMenu = ({ onClick, icon, label }) => (
  <MenuItem
    onClick={onClick}
  >
    <ListItemIcon>
      {icon}
      <Typography fontSize="small">
        {label}
      </Typography>
    </ListItemIcon>
  </MenuItem>
);

const Actions = ({ record, handleClose }) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const [deleteOne, {
    loading: deleteLoading,
    error: deleteError
  }] = useDelete('applications', record.id);

  const [approve, {
    loading: approveLoading,
    error: approveError
  }] = useUpdate('applications', record.id, {}, record);

  return (<>
    <ButtonMenu
      label='Ver'
      icon={<VisibilityIcon />}
      onClick={
      (e) => {
        handleClose()
      }}
    />
    { (record.state.name == 'Aprobado') &&
        <ButtonMenu
          label='Descargar'
          icon={<GetAppIcon />}
          onClick={
          (e) => {
            download(`applications/${record.id}/download`, 'certificado.pdf');
            handleClose(); 
          }}
        />
    }
    { (record.state.name == 'Pendiente') && (<>
        <ButtonMenu
          label='Aprobar'
          icon={<CheckIcon />}
          onClick={
            (e) => {
              approve();
              handleClose();
          }}
        />
        <ButtonMenu
          label='Anular'
          icon={<DeleteIcon />}
          onClick={
            (e) => {
              deleteOne();
              handleClose();
          }}
        />
      </>)
    }
   </>
  );
}

const MenuActions = props => {
  const { record } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
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
        <Actions record={record} handleClose={handleClose}/>
      </Menu>
    </div>
  );
};


export default MenuActions;

