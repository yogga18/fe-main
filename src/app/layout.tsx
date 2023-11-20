'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Footer from './Components/Footer';
import NavigationBar from './Components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavigationBar />
        {children}
        {pathname === '/register' || pathname === '/login' ? null : <Footer />}
      </body>
    </html>
  );
}
