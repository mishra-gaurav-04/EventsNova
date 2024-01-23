import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex items-center justify-center p-1 py-2'>
        <Link href="/"><h1 className='font-mono text-lg text-gray-600'>EventsNova @ copyright 2024</h1></Link>
      </div>
    </footer>
  );
};

export default Footer;