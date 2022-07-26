import {Children} from '../../common/types';
import {Auth0Provider} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';

interface Auth0Config {
  domain: string;
  clientId: string;
  audience: string;
}
const auth0Config = {
  domain: import.meta.env.APP_AUTH0_DOMAIN,
  clientId: import.meta.env.APP_AUTH0_CLIENT_ID,
  audience: import.meta.env.APP_AUTH0_AUDIENCE,
} as Auth0Config;

const AuthProvider = ({ children }: Children) => {
  const navigate = useNavigate();
  const onRedirectCallback = async (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  const { domain, clientId, audience } = auth0Config;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      useRefreshTokens={true}
      // cacheLocation="localstorage"
      scope="openid profile email permissions"

    >
      {children}
    </Auth0Provider>
  );
};

export { AuthProvider, auth0Config };
