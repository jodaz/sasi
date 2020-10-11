import axios from 'axios';
import {
  GET_LIST
} from './actions';
import { stringify } from 'qs';
import {
  NotImplementedError
} from './errors';

export default (apiURL, customSettings = {}) => (type, resource, params) => {
  let url = '';

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
    default:
      throw new NotImplementedError(`Unsupported Data Provider request type ${type}`);
  }

  return axios(url)
    .then((response) => {
      let total = response.data.data.length;

      switch(type) {
        case GET_LIST: 
          return { data: response.data.data.map(item => item), total };

          break;
        default:
          throw new NotImplementedError(`Unsupported Data Provider request type ${type}`);
      }
    });
};
