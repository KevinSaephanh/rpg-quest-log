import { useRouter } from 'next/router';
import React from 'react';
import { AuthProps, useAuth } from 'src/hooks/useAuth';

export const withAuth = <T extends AuthProps>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> => {
  const AuthComponent: React.FC<T> = (props) => {
    const { status } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/');
      }
    }, [status, router]);

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};
