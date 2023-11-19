import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
};

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <p>landing</p>
    </div>
  );
}
