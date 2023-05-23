import Image from 'next/image';
import React from 'react';
import { NavLink } from './NavLink';

const Navbar: React.FC = () => {
  const isAuth = false;

  return (
    <header className='`w-full flex-none px-2 md:px-6 pt-4 md:h-16'>
      <div className='flex flex-wrap items-center justify-between'>
        <div>
          <Image src='/assets/scroll.png' alt='#' height={30} width={40} />
        </div>
        <ul className='flex flex-row list-none p-2 md:space-x-8 md:mt-0'>
          {!isAuth ? (
            <>
              <NavLink
                label='Signin'
                href='#'
                styles='pr-2'
                handleClick={() => {
                  console.log('Signin');
                }}
              />
              <NavLink
                label='Signup'
                href='#'
                handleClick={() => {
                  console.log('Signup');
                }}
              />
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
    </header>
  );
};

export default Navbar;
