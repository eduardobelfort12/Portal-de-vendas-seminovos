import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '..................................',
  clientId: '......................................',
  redirectUri: "http://localhost:3000/AdminPainel",
  endpoints: {
    api: '........................................',
  },
  
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
