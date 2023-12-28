import type { Metadata } from 'next';
import React from 'react';
import Kontak from '../../Components/Kontact/Kontak';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Page',
};

const Contact = () => {
  return (
    <div>
      <Kontak />
    </div>
  );
};

export default Contact;
