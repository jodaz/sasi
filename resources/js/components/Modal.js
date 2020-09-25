import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../store';
import Modal from 'react-modal';
import {
  Portlet,
  PortletHeader,
  PortletBody,
} from './';

Modal.setAppElement('#app');

export default function Index() {
  const dispatch = useDispatch();
  const modalOpen = useSelector(store => store.modal.isOpen); 
  const message = useSelector(store => store.modal.message); 

  const closeModal = () => dispatch(Actions.closeModal());

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      className='custom-modal'
      overlayClassName='overlay'
    >
      <Portlet>
        <PortletHeader label={message}/>
      </Portlet>
    </Modal>  
  );
}
