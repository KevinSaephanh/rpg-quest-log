import React from 'react';

const Navbar: React.FC = () => {
  const isAuth = false;

  return (
    <header className='`w-full flex-none px-2 md:px-6 pt-4 md:h-16'>
      <div className='flex flex-wrap items-center justify-between'>
        <div>LOGO HERE</div>
        <ul className='flex flex-col md:flex-row list-none p-2 mt-4 md:space-x-8 md:mt-0'>
          {!isAuth ? (
            <>
              <li>Signin</li>
              <li>Signup</li>
            </>
          ) : (
            <>
              <li>Signout</li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
