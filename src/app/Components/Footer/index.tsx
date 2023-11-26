import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <div>
            <p className='font-medium text-gray-900'>Services</p>
            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Saving For Your Plan
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Frugal Living
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Learn How Money Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Company</p>
            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Resources</p>
            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Social Media</p>
            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-200 pt-8'>
          <p className='text-xs text-gray-500 text-center'>
            &copy; {new Date().getFullYear()}. Build with 💖 by{' '}
            <Link
              href={'https://web-personal-five.vercel.app/'}
              className='text-blue-500 font-bold'
              target='_blank'
            >
              Yogga
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
