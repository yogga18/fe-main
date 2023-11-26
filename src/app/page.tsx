import type { Metadata } from 'next';
import Feature from './Components/Feature/Feature';
import ProductLanding from './Components/Feature/ProductLanding';
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
      <ProductLanding />
      <Kontak />
    </>
  );
}
