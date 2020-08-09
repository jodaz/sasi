import React from 'react';
// Components
import Subheader from './subheader';
import Header from './header';

const Wrapper = ({ children }) => (
  <div className="kt-grid kt-grid--hor kt-grid--root">
    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper">
        <Header />
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
          <Subheader />
          <div className="kt-content  kt-grid__item kt-grid__item--fluid">
            {children}
          </div>
        </div>
      </div>      
    </div>
  </div>
);

export default Wrapper;
