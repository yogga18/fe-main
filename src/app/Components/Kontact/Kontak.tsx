'use client';
import useUnitUTStore from '@/store/unit';
import React, { useEffect } from 'react';

const Kontak = () => {
  const { UnitUT, UsersUT, getUnitUT, getUsersUT } = useUnitUTStore();

  useEffect(() => {
    // getUnitUT().then((res) => {
    //   console.log('res', res);
    // });
    // getUsersUT().then((res) => {
    //   console.log('res', res);
    // });
    getUnitUT();
    getUsersUT();
  }, []);

  console.log('UnitUT', UnitUT);
  console.log('UsersUT', UsersUT);

  return (
    <div className='isolate bg-blue-300 px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10'>
          Contact Sales
        </p>
      </div>
      <form
        action='#'
        method='POST'
        className='mx-auto mt-16 max-w-xl sm:mt-20 shadow-md p-5 rounded-md bg-white'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Company
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='company'
                id='company'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                name='email'
                id='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phone-number'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Phone number
            </label>
            <div className='relative mt-2.5'>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <label htmlFor='country' className='sr-only'>
                  Country
                </label>
                <select
                  id='country'
                  name='country'
                  className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm'
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <svg
                  className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <input
                type='tel'
                name='phone-number'
                id='phone-number'
                className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                name='message'
                id='message'
                rows={4}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Kontak;
