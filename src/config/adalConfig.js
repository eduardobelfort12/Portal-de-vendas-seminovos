import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '56eda749-b95e-4a74-93de-f01fd6b161cc',
  clientId: '081347b0-56f5-414b-9f25-8142fdb4b12c',
  redirectUri: "http://localhost:3000/AdminPainel",
  endpoints: {
    api: '56eda749-b95e-4a74-93de-f01fd6b161cc',
  },
  
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);