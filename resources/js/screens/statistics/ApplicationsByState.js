import React, { useState, useRef, useEffect } from 'react';
import {
  Portlet,
  PortletHeader,
  Loading,
  Chart,
  PortletBody
} from '../../components';
import axios from 'axios';
import { isEmpty } from '../../utils';

const ApplicationsByState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [labels, setLabels] = useState({});
  const [config, setConfig] = useState({});
  const canvasRef = useRef(null);

  const fetchData = () => {
    axios.get('/api/states?totalApplications=true')
      .then((res) => {

        const datasets = res.data.map(d => d.applications_count);
        const labels = res.data.map(d => d.name);
        setData(datasets);
        setLabels(labels);
        setConfig({
          type: 'bar',
          data: {
            datasets: [{
              data: datasets
            }],
            labels: labels
          }
        });
        setIsLoading(false);
      }).catch(err => console.log(err.response.data));
  };

  useEffect(() => fetchData(), []);

  return (
    <Portlet>
      { (!isLoading) && <PortletHeader label='Solicitudes por estado' /> }
      <PortletBody>
      {
        (isLoading)
        ? <Loading />
        : <Chart config={config}/>
      }
      </PortletBody>
    </Portlet>
  );
}

export default ApplicationsByState;
