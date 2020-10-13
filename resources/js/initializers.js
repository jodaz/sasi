import createAdminStore from './store';
import { 
  dataProvider as apiClient,
  history
} from './utils';

export const dataProvider = apiClient('http://dev.sasi.loc/api');

export const store = createAdminStore({
  dataProvider,
  history
});

export {
  history
}

