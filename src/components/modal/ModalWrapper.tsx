import React from 'react';

type SigninModalProps = {
  show: boolean;
  setShow: Function;
  children: React.ReactNode;
  title?: string;
  styles?: string;
};

export const ModalWrapper: React.FC<SigninModalProps> = ({
  show,
  setShow,
  children,
  title,
  styles,
}) => {
  const modalErrorFromState = null;

  return (
    <div className={`${!show && 'hidden'} ${styles} modal`}>
      <button className='ml-auto mr-0 pt-2' onClick={() => setShow(false)}>
        CLOSE BUTTON
      </button>
      {title && <h2 className='text-center font-bold py-2'>{title}</h2>}
      {modalErrorFromState && <span className='error-message'>{modalErrorFromState}</span>}
      {children}
    </div>
  );
};
