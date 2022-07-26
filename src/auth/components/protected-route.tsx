import { Navigate, useLocation } from 'react-router-dom';
import { WithChildren } from '../../common/types';
import React from 'react';
import { Loading } from '../../common/components/loading-component';
import { useAuthWithPermissions } from '../hooks/use-auth-with-permissions';
export type ProtectedRouteProps = WithChildren<{
  requiredPermissions?: string[];
}>;

export default function ProtectedRoute({
  children,
  requiredPermissions,
}: ProtectedRouteProps): JSX.Element {
  const { auth, hasPermissions } = useAuthWithPermissions(requiredPermissions);
  const location = useLocation();
  if (auth.isLoading) {
    return <Loading />;
  }
  console.log(auth);

  if (!auth.isAuthenticated) {
    return <Navigate to={'/login'} replace state={{ from: location.pathname }} />;
  }
  if (!hasPermissions) {
    return <Navigate to={'/unauthorized'} replace state={{ from: location.pathname }} />;
  }
  return children as JSX.Element;
}
