'use client';

import useStoreUser from '@/store/auth/auth';
import Link from 'next/link';
import { useRef } from 'react';

const FormLogin = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { reducerLogin, postLogin } = useStoreUser();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    // Dapatkan nilai dari useRef
    const usernameValue = userNameRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    // Pastikan bahwa nilai dari useRef adalah string
    if (
      typeof usernameValue !== 'string' ||
      typeof passwordValue !== 'string'
    ) {
      console.error('Invalid input values');
      return;
    }

    // Buat payload dengan nilai yang telah diverifikasi
    const payload = {
      username: usernameValue,
      password: passwordValue,
    };

    postLogin(payload).then((response) => {
      // console.log('response', response);
      if (response.success) {
        // save resposne to localstorage
        // localStorage.setItem("authUser", JSON.stringify(response.data));
        location.reload();
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='my-10 shadow-md p-5'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            ref={userNameRef}
            name='floating_email'
            id='floating_email'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_email'
            className='peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Username
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='password'
            ref={passwordRef}
            name='floating_password'
            id='floating_password'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_password'
            className='peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Password
          </label>
        </div>
        <p className='text-end text-xs mb-5'>
          If you dont have an account, please{' '}
          <Link href='/register' className='text-blue-600 font-bold'>
            Sign Up
          </Link>{' '}
          first.
        </p>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormLogin;
