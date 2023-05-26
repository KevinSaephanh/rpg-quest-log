import React from 'react';
import { AuthProps, useAuth } from 'src/hooks/useAuth';

export const withAuth = <T extends AuthProps>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> => {
  const AuthComponent: React.FC<T> = (props) => {
    const authData = useAuth();

    if (authData.status === 'loading') {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...authData} {...props} />;
  };

  return AuthComponent;
};
