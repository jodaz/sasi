import * as React from "react";
import { useNotify } from 'react-admin';
import { ButtonMenu } from '../../components';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import isEmpty from 'is-empty';
import { apiURL } from '../../config';
import { download } from '../../utils';

export default function (props) {
  const { onClick, record, ...rest } = props;
  const notify = useNotify();

  const handleDownload = async () => {
    await download(`${apiURL}/applications/${record.id}/download`, 'certificado.pdf');
    // const { response, error } = await axios.put(`${apiURL}/applications/${record.id}`)
    //   .then(res => ({ response: res.data }))
    //   .catch(error => ({ error: error.message.data }));

    // if (!isEmpty(response)) {
    //   setShowDialog(false);
    //   refresh();
    //   notify(`¡Ha aprobado la solicitud #${record.num}`);
    // }
  };

  return (
    <ButtonMenu
      label='Descargar'
      icon={<GetAppIcon />}
      onClick={() => {
        handleDownload();
        onClick();
      }}
      {...rest}
    />
  );
}