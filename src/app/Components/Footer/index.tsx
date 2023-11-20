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
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  UI/UX Design
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

        <div className='mt-12 border-t border-gray-200 pt-8'>
          <div className='flex flex-wrap gap-4 text-xs'>
            <a href='#' className='text-gray-500 transition hover:opacity-75'>
              Terms & Conditions
            </a>
            <a href='#' className='text-gray-500 transition hover:opacity-75'>
              Privacy Policy
            </a>
            <a href='#' className='text-gray-500 transition hover:opacity-75'>
              Cookies
            </a>
          </div>

          <p className='mt-8 text-xs text-gray-500'>
            &copy; {new Date().getFullYear()}. Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
