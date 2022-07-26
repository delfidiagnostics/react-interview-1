import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavState } from '../../common/types';
import {PrimaryButton} from "../../common/elements/button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
  const navState = location.state as NavState;
  const returnTo = navState?.from ?? '/home';
  const appState = {
    returnTo
  };
  const loginOptions = {
    appState,
  };
  return (
      <PrimaryButton
      onClick={() => loginWithRedirect(loginOptions)}
      className={'block w-full rounded-md border border-transparent px-5 py-3 bg-primary-500 text-base text-white font-medium sm:px-10'}
      >
        SSO Login

      </PrimaryButton>
  );
};

export default LoginButton;
