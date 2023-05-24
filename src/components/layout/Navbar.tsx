import Image from 'next/image';
import React from 'react';
import { NavLink } from './NavLink';
import { MedievalSharp } from 'next/font/google';
import { AuthModal } from '../modal/AuthModal';

const medieval = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
});

const Navbar: React.FC = () => {
  const [authType, setAuthType] = React.useState<'signup' | 'signin' | null>(null);
  const isAuth = false;

  return (
    <header className='`w-full flex-none px-2 md:px-6 pt-4 md:h-16'>
      <div className='flex flex-wrap items-center justify-between'>
        <div>
          <Image src='/assets/scroll.png' alt='#' height={30} width={40} />
        </div>
        <ul className={`flex flex-row list-none p-2 md:space-x-8 md:mt-0 ${medieval.className}`}>
          {!isAuth ? (
            <>
              <NavLink
                label='Signin'
                href='#'
                styles='pr-4 md:pr-2'
                handleClick={() => setAuthType('signin')}
              />
              <NavLink label='Signup' href='#' handleClick={() => setAuthType('signup')} />
            </>
          ) : (
            <>
              <NavLink
                label='Signout'
                href='#'
                handleClick={() => {
                  console.log('Signout');
                }}
              />
            </>
          )}
        </ul>
      </div>

      {authType && <AuthModal modalType={authType} setAuthType={setAuthType} />}
    </header>
  );
};

export default Navbar;
