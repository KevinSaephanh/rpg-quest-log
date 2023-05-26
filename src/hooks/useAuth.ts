import React from 'react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

export type AuthProps = {
  session: Session | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};

export const useAuth = (): AuthProps => {
  const { data: session, status } = useSession();
  const [auth, setAuth] = React.useState<AuthProps>({
    session,
    status,
  });

  React.useEffect(() => {
    setAuth({
      session,
      status,
    });
  }, [session, status]);

  return auth;
};
