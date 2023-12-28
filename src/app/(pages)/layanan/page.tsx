import type { Metadata } from 'next';
import React from 'react';
import Feature from '../../Components/Feature/Feature';

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Layanan Page',
};

const Layanan = () => {
  return (
    <div>
      <Feature />
    </div>
  );
};

export default Layanan;
