import type { Metadata } from 'next';
import React from 'react';
import FormRegis from './FormRegis';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In Page',
};

const Register = () => {
  return (
    <div className='w-5/6 md:w-1/2 m-auto'>
      <FormRegis />
    </div>
  );
};

export default Register;
