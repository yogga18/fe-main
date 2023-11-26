import type { Metadata } from 'next';
import FormLogin from './FormLogin';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up Page',
};

const Login = () => {
  return (
    <div className='w-5/6 md:w-1/2 m-auto'>
      <FormLogin />
    </div>
  );
};

export default Login;
