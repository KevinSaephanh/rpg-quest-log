import React from 'react';
import { InputField } from '../form/InputField';
import { ModalContext } from 'src/context/modal/context';
import { SigninModal } from './SigninModal';

export const SignupModal: React.FC = () => {
  const modalContext = React.useContext(ModalContext);
  const [inputs, setInputs] = React.useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    console.log('signup');
  };

  const submitDisabled = () => {
    const { email, username, password, confirmPassword } = inputs;
    return email === '' || password === '' || username === '' || confirmPassword === '';
  };

  return (
    <>
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
      <InputField
        label='Confirm Password'
        type='password'
        name='confirmPassword'
        placeholder='confirm password'
        value={inputs.confirmPassword}
        onChange={handleChange}
        required
      />
      <button
        className='w-20 mx-auto'
        type='submit'
        disabled={submitDisabled()}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <span className='mt-2 mb-4'>
        Already have an account? Login{' '}
        <a
          className='hyperlink'
          onClick={() => {
            modalContext.openModal('Signin', <SigninModal />);
          }}
        >
          here
        </a>
      </span>
    </>
  );
};
