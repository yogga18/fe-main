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
      <div className='bg-blue-300 flex justify-between items-center px-3 h-20'>
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
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/'>Tentang Kami</Link>
            </li>
            <li
              className={
                pathname === '/layanan'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/layanan'>Layanan</Link>
            </li>
            <li
              className={
                pathname === '/contact'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
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
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/register'>Sign Up</Link>
            </li>
            <li
              className={
                pathname === '/login'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/login'>Sign In</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden cursor-pointer' onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <p className='text-white font-bold'>X</p>
          ) : (
            <p className='text-white font-bold'>Menu</p>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div className='md:hidden absolute bg-blue-300 right-0 h-screen w-full z-10'>
          <ul className='flex flex-col justify-center align-middle items-center gap-3 mt-5'>
            <li
              onClick={toggleSidebar}
              className={
                pathname === '/'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/'>Tentang Kami</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className={
                pathname === '/layanan'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/layanan'>Layanan</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className={
                pathname === '/contact'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/contact'>Contact</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className={
                pathname === '/register'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/register'>Sign Up</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className={
                pathname === '/login'
                  ? 'text-md underline underline-offset-1 duration-300 ease-in-out'
                  : 'text-white'
              }
            >
              <Link href='/login'>Sign In</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
