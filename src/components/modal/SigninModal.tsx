import React from 'react';
import { InputField } from '../form/InputField';

export const SigninModal: React.FC = () => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    console.log('signin');
  };

  const submitDisabled = () => {
    const { email, password } = inputs;
    return email === '' || password === '';
  };

  return (
    <>
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
      <button type='submit' disabled={submitDisabled()} onClick={handleSubmit}>
        Submit
      </button>
      <span className='mt-2 mb-4'>
        Don&rsquo;t have an account? Signup{' '}
        <a className='hyperlink' onClick={() => {}}>
          here
        </a>
      </span>
    </>
  );
};
