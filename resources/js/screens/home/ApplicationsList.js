import React, { useState, useEffect } from 'react';
import {
  Loading,
  Portlet,
  PortletHeader,
  PortletToolbar,
  PortletBody,
  Icon,
  Row
} from '../../components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loadingPortlet, isEmpty } from '../../utils';
import { Actions } from '../../store';

const LoadingPortlet = () => (
  <Portlet>
    <PortletBody>
      <Loading />
    </PortletBody>
  </Portlet>
);

const applicationInfo = (application) => (
  <span className="kt-menu__link-text">
    <span className="kt-badge kt-badge--inline kt-badge--danger">
      {application.category.name}
    </span>
    {' '}
    {' '}
    { (application.quantity) && 
      <span className="kt-badge kt-badge--inline kt-badge--success">
        {application.quantity}
      </span>
    }
  </span>
);

const ApplicationsList = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();

  function isScrolling(){
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;

    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + (window.innerHeight * 0.1) >= scrollHeight && (isEmpty(data))) {
      setIsFetching(true);
    } else {
      return;
    }
  }

  const fetchData = () => {
    axios.get(`/api/applications?state=1&page=${page}`)
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

  const handlerApplication = ({ application, action }) => dispatch(Actions.openModal({
    message: '¿Desea aprobar esta solicitud?',
    application: application,
    action: action
  }));

  if (loading) return <LoadingPortlet />

  return (
    <>
      { 
        (isEmpty(data)) 
        ? (
          <Portlet>
            <PortletBody>
              {"Parece que no tiene una solicitud pendiente..."}
            </PortletBody>
          </Portlet>
        )
        : (
          data.map((application, index) => 
            <Portlet key={index}>
              <PortletHeader
                label={application.user.full_name}
                sublabel={application.created_at}
              >
                { (user.role_id == 2) &&   
                <PortletToolbar>
                  <button className="btn btn-sm btn-brand btn-circle btn-icon" onClick={handlerApplication(application.id, 'approve')}>
                    <Icon icon='check' />
                  </button>
                  <button className="btn btn-sm btn-secondary btn-circle btn-icon" onClick={handlerApplication(application.id, 'refuse')}>
                    <Icon icon='trash' />
                  </button>
                </PortletToolbar>
                }
              </PortletHeader>
              <PortletBody>
                {application.description}
                {applicationInfo(application)}
              </PortletBody>
            </Portlet>
          )
        )
      }
      { (isFetching) && <LoadingPortlet /> }
    </>
  );
};

export default ApplicationsList;
