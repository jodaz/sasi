import React from 'react';

const Subheader = ({ children }) => (
  <div className="kt-subheader   kt-grid__item" id="kt_subheader">
    <div className="kt-subheader__main">
      <h3 className="kt-subheader__title">
        No Aside
      </h3>
      <span className="kt-subheader__separator kt-hidden"></span>
      <div className="kt-subheader__breadcrumbs">
        <a href="#" className="kt-subheader__breadcrumbs-home"></a>
        <span className="kt-subheader__breadcrumbs-separator"></span>
        <a href="" className="kt-subheader__breadcrumbs-link">
          General
        </a>
        <span className="kt-subheader__breadcrumbs-separator"></span>
        <a href="" className="kt-subheader__breadcrumbs-link">
          No Aside
        </a>
      </div>
    </div>
  </div>
);

export default Subheader;
