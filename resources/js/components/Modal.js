import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../store';
import Modal from 'react-modal';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  Icon,
  PortletFooter
} from './';

Modal.setAppElement('#app');

export default function Index() {
  const dispatch = useDispatch();
  const modalOpen = useSelector(store => store.modal.isOpen); 
  const message = useSelector(store => store.modal.message); 
  const data = useSelector(store => ({
    action: store.modal.action,
    application: store.modal.application
  }));

  const closeModal = () => dispatch(Actions.closeModal());

  const onSubmit = () => {
    dispatch(Actions.updateApplication(data));
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      className='custom-modal'
      overlayClassName='overlay'
    >
      <Portlet>
        <PortletHeader label={message}/>
        <PortletFooter>
          <button className="btn btn-success" onClick={onSubmit}>
            <Icon icon='trash' />
            Cancelar
          </button> 
          {'  '}
          <button className="btn btn-danger" onClick={closeModal}>
            <Icon icon='trash' />
            Cancelar
          </button> 
        </PortletFooter>
      </Portlet>
    </Modal>  
  );
}
