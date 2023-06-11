import Image from 'next/image';
import React from 'react';
import { NavLink } from './NavLink';
import { SignupModal } from '../modal/SignupModal';
import { SigninModal } from '../modal/SigninModal';
import { ModalContext } from 'src/context/modal/context';
import { useAuth } from 'src/hooks/useAuth';
import { ModalWrapper } from '../modal/ModalWrapper';

const Navbar: React.FC = () => {
  const modalContext = React.useContext(ModalContext);
  const { status } = useAuth();

  return (
    <header className='bg-indigo-900 px-2 md:px-6 py-2'>
      <div className='flex flex-wrap items-center justify-between'>
        <Image src='/assets/rpg-scroll.png' alt='#' height={30} width={40} />
        <ul className='flex flex-row list-none p-2 md:space-x-8 md:mt-0'>
          {status !== 'authenticated' ? (
            <>
              <NavLink
                label='Signin'
                href='#'
                styles='pr-4 md:pr-2'
                handleClick={() => {
                  modalContext.openModal('Signin', <SigninModal />);
                }}
              />
              <NavLink
                styles='btn p-2 rounded'
                label='Signup'
                href='#'
                handleClick={() => {
                  modalContext.openModal('Signup', <SignupModal />);
                }}
              />
            </>
          ) : (
            <>
              <NavLink
                label='Quests'
                href='/quests'
                handleClick={() => {
                  console.log('Quests');
                }}
              />
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

      <ModalWrapper />
    </header>
  );
};

export default Navbar;
