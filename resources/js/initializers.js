import createAdminStore from './store';
import { 
  dataProvider as apiClient,
  history
} from './utils';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

export const dataProvider = apiClient('http://dev.sasi.loc/api');

const i18nProvider = polyglotI18nProvider(() => spanishMessages);

export const store = createAdminStore({
  dataProvider,
  history
});

export {
  i18nProvider,
  history
}

