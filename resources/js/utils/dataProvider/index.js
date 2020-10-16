import axios from 'axios';
import {
  GET_LIST,
  CREATE,
  DELETE,
  GET_MANY,
  GET_ONE,
  UPDATE,
  GET_MANY_REFERENCE
} from './actions';
import { stringify } from 'qs';
import {
  NotImplementedError
} from './errors';
import defaultSettings from './defaultSettings';

export default (apiURL, customSettings = {}) => (type, resource, params) => {
  let url = '';
  const settings = {...customSettings, ...defaultSettings};
  const options = {
    headers: settings.headers,
  };

  switch(type) {
    case GET_LIST: 
      const { page, perPage } = params.pagination;

      // Create query with pagination params.
      const query = {
        'page[number]': page,
        'page[size]': perPage,
      };

      // Add all filter params to query.
      Object.keys(params.filter || {}).forEach((key) => {
        query[`filter[${key}]`] = params.filter[key];
      });

      // Add sort parameter
      if (params.sort && params.sort.field) {
        const prefix = params.sort.order === 'ASC' ? '' : '-';
        query.sort = `${prefix}${params.sort.field}`;
      }

      url = `${apiURL}/${resource}?${stringify(query)}`;
      break;
    case CREATE:
      url = `${apiURL}/${resource}`;
      options.method = 'POST';
      options.data = { ...params.data };
      break;
    case DELETE:
      url = `${apiURL}/${resource}/${params.id}`;
      options.method = 'DELETE';
      break;
    case GET_ONE:
      url = `${apiURL}/${resource}/${params.id}`;
      break;
    case UPDATE: 
      url = `${apiURL}/${resource}/${params.id}`;
      const attributes = params.data;
      delete attributes.id;
      const data = {
        ...attributes
      };
      options.method = settings.updateMethod;
      options.data = JSON.stringify(data);
      break;
    default:
      throw new NotImplementedError(`Unsupported Data Provider request type ${type}`);
  }

  return axios({ url, ...options })
    .then((res) => {
      let total;

      if ([GET_LIST, GET_MANY, GET_MANY_REFERENCE].includes(type)) {
        if (res.data.meta && settings.total) {
          total = res.data.meta[settings.total];
        }  
        total = total || res.data.data.length;
      }

      switch(type) {
        case GET_LIST: 
          return { data: res.data.data.map(item => item), total };

          break;
        case CREATE: 
          const { id, attributes  } = res.data;
          return {
            data: {
              id, ...attributes,
            },
          };
          break;
        case GET_ONE:
          return { data: { ...res.data  } }
          break;
        case DELETE: 
          return { 
            data: { ...res.data },
          }
          break;
        case UPDATE:
          return {
            data: { ...res.data }
          }
          break;
        default:
          throw new NotImplementedError(`Unsupported Data Provider request type ${type}`);
      }
    });
};
