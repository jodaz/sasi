import React, { useState, useEffect } from 'react';
import {
  Loading,
  Portlet,
  PortletBody,
  Row
} from '../../components';
import axios from 'axios';
import { loadingPortlet, isEmpty } from '../../utils';

const LoadingPortlet = () => (
  <Portlet>
    <PortletBody>
      <Loading />
    </PortletBody>
  </Portlet>
);

const ApplicationsList = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);

  function isScrolling(){
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;


    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + (window.innerHeight * 0.1) >= scrollHeight) {
      setIsFetching(true);
    } else {
      return;
    }
  }

  const fetchData = () => {
    axios.get(`/api/applications/?state=1&page=${page}`)
      .then(res => {
        if (!isEmpty(data)) {
          setData([ ...data, ...res.data.data])
        } else {
          setData(res.data.data);
        }
        if (loading) setLoading(false);
        setIsFetching(false);
        setPage(page + 1);
      })
      .catch(err => console.log(err.response.data));
  }

  // Register scroll event on component first load
  useEffect(() => {
    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, []);

  // Fetch more applications
  useEffect(() => {
    if (!isFetching) return;
    fetchData();
  }, [isFetching]);

  if (loading) return <LoadingPortlet />

  return (
    <>
      { 
        data.map((application, index) => 
          <Portlet key={index}>
            <PortletBody>
              {application.title}
            </PortletBody>
          </Portlet>
        )
      }
      { (isFetching) && <LoadingPortlet /> }
    </>
  );
};

export default ApplicationsList;
