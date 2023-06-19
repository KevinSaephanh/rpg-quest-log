import React from 'react';
import { ModalContext } from 'src/context/modal/context';

export const ModalWrapper: React.FC = () => {
  const { modalContent, modalTitle, modalError, closeModal } = React.useContext(ModalContext);

  return (
    <>
      {modalContent && (
        <div className='modal'>
          <button className='ml-auto mr-0 mt-4 border-none' onClick={closeModal}>
            <span className='sr-only'>Close menu</span>
            <svg
              className='h-6 w-6 hover:text-violet-700'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <h2 className='py-2'>{modalTitle}</h2>
          {modalError.length > 0 && <span className='error-message'>{modalError}</span>}
          {modalContent}
        </div>
      )}
    </>
  );
};
