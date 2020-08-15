import React, { useEffect } from 'react';
// Components
import Wrapper from './wrapper';
import Header from './header';
import { isMobile, isEmpty } from '../../utils';
import { ToastWrapper, Success } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification  } from '../../store/actions';

const Index = ({ children }) => {
  const dispatch = useDispatch();
  const notification = useSelector(store => store.notification);

  useEffect(() => {
    if (!isEmpty(notification)) {
      Success(notification.message); 
      dispatch(clearNotification());
    }  
    return;
  }, [notification]);
  
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid">
      <Header mobile={isMobile(1025)}/>
      <Wrapper>
        {children}
      </Wrapper>
      <ToastWrapper />
    </div>
  );
};

export default Index;
