import React from 'react';

type InputFieldProps = {
  value: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
} & Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

export const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  ...props
}) => {
  return (
    <>
      {label && (
        <label className='pb-2' htmlFor='input-field'>
          {label}
        </label>
      )}
      <input
        className='mb-2 p-2'
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};
