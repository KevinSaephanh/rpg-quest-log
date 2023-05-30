import React from 'react';

type FormProps = {
  styles?: string;
  children: React.ReactNode;
  submitDisabled?: boolean;
  submitButtonText?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormWrapper: React.FC<FormProps> = ({
  styles,
  children,
  submitDisabled,
  submitButtonText = 'Submit',
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col justify-between ${styles}`}>
      {children}
      <button className='w-20 mx-auto' type='submit' disabled={submitDisabled}>
        {submitButtonText}
      </button>
    </form>
  );
};
