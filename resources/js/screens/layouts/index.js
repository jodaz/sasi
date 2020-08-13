import React from 'react';
// Components
import Wrapper from './wrapper';
import Header from './header';
import { isMobile } from '../../utils';

const Index = ({ children }) => (
  <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid">
    <Header mobile={isMobile(1025)}/>
    <Wrapper>
      {children}
    </Wrapper>
  </div>
);

export default Index;
