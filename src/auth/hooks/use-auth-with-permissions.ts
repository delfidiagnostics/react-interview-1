import { Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { auth0Config } from '../providers/auth-provider';

function hasAllPermissions(
  assignedPermissions: string[],
  requiredPermissions: string[] | undefined,
): boolean {
  return !requiredPermissions
    ? true
    : !assignedPermissions
    ? false
    : requiredPermissions.every((p) => assignedPermissions.includes(p));
}

interface AuthWithPermissions {
  auth: Auth0ContextInterface;
  hasPermissions: boolean;
}

function useAuthWithPermissions(
  requiredPermissions: string[] | undefined,
): AuthWithPermissions {
  const auth = useAuth0();
  const { audience } = auth0Config;
  const customClaimsKey = `${audience}/permissions`;
  let hasPermissions = false;
  if (!auth.isAuthenticated) {
    return { auth, hasPermissions };
  }
  //user might be authenticated but the perms might have expired (due to expiry of access token from the API) or not present.
  // if so we will treat this as un-authenticated state instead of unauthorized state.
  if (auth.user && !(customClaimsKey in auth.user)) {
    auth.isAuthenticated = false;
    return { auth, hasPermissions };
  }
  const assignedPerms = auth.user && auth.user[customClaimsKey];
  hasPermissions = hasAllPermissions(assignedPerms, requiredPermissions);
  return { auth, hasPermissions };
}

export { useAuthWithPermissions };
