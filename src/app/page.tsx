import type { Metadata } from 'next';
import Feature from './Components/Feature/Feature';
import Hero from './Components/Hero/Hero';
import Kontak from './Components/Kontact/Kontak';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Kontak />
    </>
  );
}
