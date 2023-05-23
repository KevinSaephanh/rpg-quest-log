import React from 'react';

type AuthModalProps = {
  modalType: 'signup' | 'login';
};

export const AuthModal: React.FC<AuthModalProps> = ({ modalType }) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [submitDisabled, setSubmitDisabled] = React.useState(true);
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [isSignup, setIsSignup] = React.useState(modalType === 'signup');

  const toggleAuthModalType = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = () => {
    if (isSignup) console.log('signup');
    else console.log('signin');
  };

  return (
    <dialog>
      <span>{modalType.toUpperCase()}</span>
      <span className='mb-2 font-bold text-red-600 dark:text-red-700'>{submitMessage}</span>
      {isSignup ? (
        <>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='username'
            minLength={4}
            maxLength={15}
          ></input>
        </>
      ) : null}
      <label>Email</label>
      <input
        type='email'
        name='email'
        placeholder='email'
        minLength={5}
        maxLength={25}
        required
      ></input>
      <label>Password</label>
      <input
        type='password'
        name='password'
        placeholder='password'
        minLength={8}
        maxLength={25}
        required
      ></input>
      {isSignup ? (
        <>
          <label>Confirm Password</label>
          <input type='password' name='confirmPassword' placeholder='confirm password'></input>
        </>
      ) : null}
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
      <span>
        {isSignup ? 'Already have an account? Login ' : 'Don&apos;t have an account? Signup '}
        <strong onClick={toggleAuthModalType}>here</strong>
      </span>
    </dialog>
  );
};
