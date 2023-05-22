import React from 'react';

type AuthModalProps = {
  modalType: 'signup' | 'login';
};

export const AuthModal: React.FC<AuthModalProps> = ({ modalType }) => {
  const [inputs, setInputs] = React.useState();
  const [isSignup, setIsSignup] = React.useState(modalType === 'signup');

  const toggleAuthModalType = () => {
    setIsSignup(!isSignup);
  };

  const onSubmit = () => {
    if (isSignup) console.log('signup');
    else console.log('signin');
  };

  return (
    <dialog>
      <span>{modalType.toUpperCase()}</span>
      {isSignup ? (
        <>
          <label>Username</label>
          <input></input>
        </>
      ) : null}
      <label>Email</label>
      <input></input>
      <label>Password</label>
      <input></input>
      {isSignup ? (
        <>
          <label>Confirm Password</label>
          <input></input>
        </>
      ) : null}
      <button type='submit'>Submit</button>
      <span>
        {isSignup ? 'Already have an account? Login ' : 'Don&apos;t have an account? Signup '}
        <strong onClick={toggleAuthModalType}>here</strong>
      </span>
    </dialog>
  );
};
