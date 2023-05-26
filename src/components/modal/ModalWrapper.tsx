import React from 'react';
import { ModalContext } from 'src/context/modal/context';

export const ModalWrapper: React.FC = () => {
  const { modalContent, modalTitle, closeModal } = React.useContext(ModalContext);
  const modalErrorFromState = null;

  return (
    <>
      {modalContent && (
        <>
          <button className='ml-auto mr-0 pt-2' onClick={closeModal}>
            CLOSE BUTTON
          </button>
          <h2 className='text-center font-bold py-2'>{modalTitle}</h2>
          {modalErrorFromState && <span className='error-message'>{modalErrorFromState}</span>}
          {modalContent}
        </>
      )}
    </>
  );
};
