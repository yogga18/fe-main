'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationBar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className='bg-blue-300 flex justify-between items-center px-3 h-16'>
        <div>
          <Link href='/'>
            <h5 className='text-2xl font-bold text-white'>Logo</h5>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex gap-3'>
            <li
              className={
                pathname === '/'
                  ? 'text-lg text-green-500 transition-colors duration-300 ease-in-out '
                  : 'text-white'
              }
            >
              <Link href='/'>Tentang Kami</Link>
            </li>
            <li
              className={
                pathname === '/layanan'
                  ? 'text-lg text-green-500 transition-colors duration-300 ease-in-out '
                  : 'text-white'
              }
            >
              <Link href='/layanan'>Layanan</Link>
            </li>
            <li
              className={
                pathname === '/contact'
                  ? 'text-lg text-green-500 transition-colors duration-300 ease-in-out '
                  : 'text-white'
              }
            >
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex gap-3'>
            <li
              className={
                pathname === '/register'
                  ? 'text-lg text-black transition-colors duration-300 ease-in-out '
                  : 'text-white'
              }
            >
              <Link href='/register'>Sign Up</Link>
            </li>
            <li
              className={
                pathname === '/login'
                  ? 'text-lg text-black transition-colors duration-300 ease-in-out '
                  : 'text-white'
              }
            >
              <Link href='/login'>Sign In</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden cursor-pointer' onClick={toggleSidebar}>
          {isSidebarOpen ? 'X' : 'Menu'}
        </div>
      </div>
      {isSidebarOpen && (
        <div className='md:hidden absolute bg-blue-300 right-0 h-screen w-2/5 z-10'>
          <ul className='flex flex-col gap-3 mt-5 pl-3'>
            <li>
              <p>Tentang Kami</p>
            </li>
            <li>
              <p>Layanan</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Sign Up</p>
            </li>
            <li>
              <p>Sign In</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
