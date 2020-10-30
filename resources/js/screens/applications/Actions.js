import * as React from "react";
import {
  DeleteButton,
  ShowButton,
  useMutation,
  useNotify,
  useRedirect,
  Button
} from 'react-admin';
// Icons
import GetAppIcon from '@material-ui/icons/GetApp';
import CheckIcon from '@material-ui/icons/Check';
import { download } from '../../utils';

const Actions = props => {
  const {
    record
  } = props;
  const notify = useNotify();
  const redirect = useRedirect();

  const [approve, { loading }] = useMutation({
    type: 'update',
    resource: 'applications',
    payload: { id: record.id }
  }, {
    undoable: true,
    onSuccess: ({ data }) => {
      redirect('/applications');
      notify('¡Solicitud aprobada!', 'info', {}, true);
    },
    onFailure: (error) => notify(`Error: ${error.message}`, 'warning')
  });

  return (
    <>
      { 
        (record.state.name === 'Pendiente') 
          && (<>
            <DeleteButton {...props} />
            <Button
              label="Aprobar"
              {...props}
              onClick={approve}
              icon={<CheckIcon />}
            />
          </>)
      }
      { (record.state.name === 'Aprobado') &&
        <Button
          label="Descargar"
          {...props}
          icon={<GetAppIcon />}
          onClick={
            (e) =>
              download(`applications/${record.id}/download`, 'certificado.pdf')
          }
        />
      }
      <ShowButton {...props} />
    </>
  );
};

export default Actions;
