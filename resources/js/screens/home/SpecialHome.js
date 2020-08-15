import React, { useState, useEffect } from 'react';
import {
  Loading,
  Portlet,
  PortletBody,
  Col,
  Row
} from '../../components';
import axios from 'axios';

const Index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useState(() => {
    axios.get('/api/applications/?state=1')
      .then(res => setData(res.data))
      .then(() => setLoading(false))
      .catch(err => setErrors(err.response.message));
  }, []);

  return (
    <Col md={8}>
      { loading 
        ? (
          <Portlet>
            <PortletBody>
              <Loading />
            </PortletBody>
          </Portlet>
        )
        : (
          data.map((application, index) => 
            <Portlet key={index}>
              <PortletBody>
                {application.title}
              </PortletBody>
            </Portlet>
          )
        )
      }
    </Col>
  );
};

export default Index;
