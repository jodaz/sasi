import React from 'react';
// Components
import Wrapper from './wrapper';

const Index = ({ children }) => (
  <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid">
    <Wrapper children={children} />
  </div>
);

export default Index;
