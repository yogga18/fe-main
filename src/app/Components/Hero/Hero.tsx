import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='bg-blue-300'>
      <div className='relative isolate px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              It is important to use money responsibly and wisely.
            </h1>
            <p className='mt-6 text-lg leading-8 text-white'>
              Create a budget. A budget is a plan for how you will spend your
              money. It can help you track your spending and make sure you are
              not overspending.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/login'
                className='rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
              >
                Get started
              </Link>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
