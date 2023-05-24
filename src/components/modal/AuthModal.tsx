import React from 'react';
import { InputField } from '../form/InputField';

type AuthModalProps = {
  modalType: 'signup' | 'signin';
  setAuthType: Function;
};

export const AuthModal: React.FC<AuthModalProps> = ({ modalType, setAuthType }) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [isSignup, setIsSignup] = React.useState(modalType === 'signup');

  const toggleAuthModalType = () => {
    setIsSignup(!isSignup);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    if (isSignup) console.log('signup');
    else console.log('signin');
  };

  const submitDisabled = () => {
    const { email, username, password, confirmPassword } = inputs;
    const isLoginFormEmpty = email === '' || password === '';
    const isSignupFormEmpty = isLoginFormEmpty || username === '' || confirmPassword === '';
    return isSignup ? isSignupFormEmpty : isLoginFormEmpty;
  };

  return (
    <div className='absolute m-auto inset-0 bg-white flex flex-col justify-between w-5/6 md:w-2/5 h-4/5 max-h-128 px-6 rounded border-gray-500 border-2'>
      <button className='ml-auto mr-0 pt-2' onClick={() => setAuthType(null)}>
        CLOSE BUTTON
      </button>
      <span className='text-center font-bold py-2'>{modalType.toUpperCase()}</span>
      <span className='mb-2 font-bold text-red-600 dark:text-red-700'>{submitMessage}</span>
      {isSignup && (
        <InputField
          label='Username'
          type='text'
          name='username'
          placeholder='username'
          minLength={4}
          maxLength={15}
          value={inputs.username}
          onChange={handleChange}
          required
        />
      )}
      <InputField
        label='Email'
        type='email'
        name='email'
        placeholder='email'
        minLength={5}
        maxLength={25}
        value={inputs.email}
        onChange={handleChange}
        required
      />
      <InputField
        label='Password'
        type='password'
        name='password'
        placeholder='password'
        minLength={8}
        maxLength={25}
        value={inputs.password}
        onChange={handleChange}
        required
      />
      {isSignup && (
        <InputField
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          placeholder='confirm password'
          value={inputs.confirmPassword}
          onChange={handleChange}
          required
        />
      )}
      <button type='submit' disabled={submitDisabled()} onClick={handleSubmit}>
        Submit
      </button>
      <span className='mt-2 mb-4'>
        {isSignup ? 'Already have an account? Login ' : `Don't have an account? Signup `}
        <strong onClick={toggleAuthModalType}>here</strong>
      </span>
    </div>
  );
};
