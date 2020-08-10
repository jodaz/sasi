import React, { useState } from 'react';
import PropTypes from 'prop-types';

const getType = (type) => {
  switch (type) {
    case 'login':
      return 'kt-login--signin';
    case 'register':
      return 'kt-login-signup';
  }
}

const Auth = (props) => {
  const {children, type} = props;

  const style = getType(type);

  return (
    <div className={'kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 ' + style}>
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
        <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
          {children}  
        </div>
      </div>  
    </div>
  );
};

Auth.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired
}; 

export default Auth;
