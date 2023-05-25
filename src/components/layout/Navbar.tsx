import Image from 'next/image';
import React from 'react';
import { NavLink } from './NavLink';
import { SignupModal } from '../modal/SignupModal';
import { SigninModal } from '../modal/SigninModal';
import { ModalWrapper } from '../modal/ModalWrapper';

const Navbar: React.FC = () => {
  const [showSignupModal, setShowSignupModal] = React.useState(false);
  const [showSigninModal, setShowSigninModal] = React.useState(false);
  const isAuth = false;

  const switchModal = () => {
    if (showSignupModal) {
      setShowSignupModal(false);
      setShowSigninModal(true);
    } else {
      setShowSignupModal(true);
      setShowSigninModal(false);
    }
  };

  return (
    <header className='px-2 md:px-6 pt-2 md:pt-4'>
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
                styles='pr-4 md:pr-2'
                handleClick={() => setShowSignupModal(true)}
              />
              <NavLink
                styles='btn'
                label='Signup'
                href='#'
                handleClick={() => setShowSigninModal(true)}
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

      <ModalWrapper show={showSignupModal} setShow={setShowSignupModal}>
        <SignupModal switchModal={switchModal} />
      </ModalWrapper>
      <ModalWrapper show={showSigninModal} setShow={setShowSigninModal}>
        <SigninModal switchModal={switchModal} />
      </ModalWrapper>
    </header>
  );
};

export default Navbar;
