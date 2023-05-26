import { MedievalSharp } from 'next/font/google';
import React from 'react';
import { SignupModal } from 'src/components/modal/SignupModal';
import { ModalContext } from 'src/context/modal/context';

const medieval = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const modalContext = React.useContext(ModalContext);

  return (
    <>
      <section className='text-center flex flex-col mb-4'>
        <h1 className={`text-3xl mb-2 ${medieval.className}`}>RPG Quest Log</h1>
        <span className='text-xl'>Create and manage quests with customizable logs</span>
        <button
          className='btn w-20 mt-4 hover:opacity-80 mx-auto'
          onClick={() => {
            modalContext.openModal('Signup', <SignupModal />);
          }}
        >
          Start &#8594;
        </button>
      </section>
      <section className=''>CONTENT HERE</section>
    </>
  );
}
