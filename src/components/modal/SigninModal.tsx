import React from 'react';
import { InputField } from '../form/InputField';
import { ModalContext } from 'src/context/modal/context';
import { SignupModal } from './SignupModal';
import { FormWrapper } from '../form/FormWrapper';
import axios from 'axios';

export const SigninModal: React.FC = () => {
  const modalContext = React.useContext(ModalContext);
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await axios.post('/api/auth/signin', inputs);
    console.log(user);
  };

  const submitDisabled = () => {
    const { email, password } = inputs;
    return email === '' || password === '';
  };

  return (
    <>
      <FormWrapper submitDisabled={submitDisabled()} handleSubmit={handleSubmit}>
        <InputField
          label='Email'
          type='email'
          name='email'
          placeholder='email'
          minLength={5}
          maxLength={25}
          value={inputs.email}
          onChange={handleChange}
          inputStyles='mb-6'
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
      </FormWrapper>
      <span className='mt-2 mb-4'>
        Don&rsquo;t have an account? Signup{' '}
        <a
          className='hyperlink'
          onClick={() => {
            modalContext.openModal('Signup', <SignupModal />);
          }}
        >
          here
        </a>
      </span>
    </>
  );
};
