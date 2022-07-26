import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import {Loading} from "../../common/components/loading-component";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading/>;
  }
  if (isAuthenticated) {
    return (
        <div className='flex space-x-2 items-center'>
          <img className="h-[42px] w-[42px] rounded-full" src={user?.picture} alt={user?.name} />
          <span className='text-sm text-gray-400'>{user?.name}</span>
        </div>
    ) as JSX.Element;
  }
  return (
    <div className="h-6 w-6 rounded-full text-gray-400">
      <UserIcon aria-hidden="true" />
    </div>
  ) as JSX.Element;
};

export default Profile;
