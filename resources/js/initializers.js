import createAdminStore from './store';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { history, dataProvider as apiClient } from './utils';
import { apiURL } from './config';

const i18nProvider = polyglotI18nProvider(() => ({
  'organizations': 'instituciones',
  ...spanishMessages
}));

export const dataProvider = apiClient(apiURL);

export const store = createAdminStore({
  dataProvider,
  history
});

export {
  i18nProvider,
  history
}

