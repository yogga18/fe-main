import Image from 'next/image';
import React from 'react';
import Accordion from '../Faq/Accordion';

const ProductLanding = () => {
  return (
    <>
      <p className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10'>
        Our <b className='text-blue-500'>Product</b>
      </p>
      <div className='flex flex-wrap justify-center align-middle gap-3'>
        <div className='card card-compact w-full mx-5 md:w-2/6 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Saving For Your Plan'
              width={750}
              height={750}
              priority
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Saving For Your Plan</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn bg-blue-600 text-white'>
                Subscription
              </button>
            </div>
          </div>
        </div>
        <div className='card card-compact w-full mx-5 md:w-2/6 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Budgeting'
              width={750}
              height={750}
              priority
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Frugal Living</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn bg-blue-600 text-white'>
                Subscription
              </button>
            </div>
          </div>
        </div>
        <div className='card card-compact w-full mx-5 md:w-2/6 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Learn How Money Works'
              width={750}
              height={750}
              priority
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Learn How Money Works</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn bg-blue-600 text-white'>
                Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
    </>
  );
};

export default ProductLanding;
